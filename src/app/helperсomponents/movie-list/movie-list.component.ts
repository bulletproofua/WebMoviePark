import { Component, Input, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Movies, FireLoopRef } from '../../shared/sdk/models';
import { Subscription } from 'rxjs/Subscription';
import { OnChanges, SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { UserApi, MoviesApi, UsersMoviesApi, LoopBackAuth } from '../../shared/sdk/index';

import {
    OnClickEvent,
    OnHoverRatingChangeEvent,
    OnRatingChangeEven,
    starRatingColor,
    starRatingPosition,
    starRatingSizes,
    starRatingSpeed,
    starRatingStarSpace,
    starRatingStarTypes
  } from 'angular-star-rating';

@Component({
selector: 'app-movie-list',
templateUrl: './movie-list.component.html',
styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnChanges {

    private serviceSub: Subscription;
    private data: any[];
    private listIsClean: boolean = false;
    _service: any;
    
    constructor(
        private userApi : UserApi, 
        private router : Router, 
        private MoviesApi: MoviesApi, 
        private UsersMoviesApi: UsersMoviesApi,
        private LoopBackAuth: LoopBackAuth
    ) { }
    
    @Input() filter: object;
    
    @Input() set service(ref: any) {
        console.log("ref ====================> : ", ref);
        if ( this.filter === undefined ) {
            this.filter = { 
                include:{ 
                    relation: "UsersMovies", 
                        scope:{
                            where:{
                                "UserId": this.LoopBackAuth.getCurrentUserId()
                            }
                        } 
                    }, order: 'MovieId ASC' };

        }

        if (ref) {
            console.log("ref INNNNN : ", ref);
            this._service = ref;

            this.serviceSub = this._service.on('change', this.filter ).subscribe(
                (instances: any) => {
                  
                    if (instances instanceof Array) {                    
                        console.log('this.filter', this.filter)
                        console.log('instances', instances)
                        if ( this.fields === undefined ) {
                            this.fields = Object.keys(instances[0]);
                        }

                        //чекаю рейтинг
                        // if( instances[0].UsersMovies[0] )
                        console.log('instances[0].UsersMovies[0] --->', instances[0].UsersMovies[0].Rating)
                        

                          instances.length = 3;
                        this.data = instances;
                        this.data.forEach( val => {
                            this.MoviesApi.getPhotos(val.MovieId).subscribe(
                                (res: any) => {
                                    val.PhotoId = res[0].PhotoId;
                                    val.Link = res[0].Link;
                                },
                                (err: any) => {
                                    console.log('err', err)
                                }
                            )                          
                        })
                        console.log('this.data', this.data)
                    } else {
                        console.log("errors : ", instances.error);
                    }
                },
                (error: any) => {
                    console.log("errors : ", error);
                }
            );           
        }
    }

    @Input() options: any = {

    };
    @Input() fields: any;

    @Output() selected: EventEmitter<any> = new EventEmitter();
    

    openMovie(context: any) {
        // this.router.navigateByUrl('/movie/' + context.id);
        this.selected.emit(context);
    }

    ngOnDestroy() {
        if (this.serviceSub) {
            this.serviceSub.unsubscribe();
        }
    }

    onRatingChange($event: OnRatingChangeEven, MovieId: any): void {
        console.log('single onRatingChange rating: ', $event.rating);
        
    }
    
    onClick($event: OnClickEvent, MovieId: any): void {
        console.log('single onClick rating: ', $event.rating);
        console.log(MovieId)
        this.UsersMoviesApi.find({where:{ "UserId": this.LoopBackAuth.getCurrentUserId(), "MovieId": MovieId}}).subscribe(
            (res:any) => {
                console.log('res', res)
                console.log('res', res[0].UserMovieId)
                // this.UsersMoviesApi.upsert({
                //     "UsersMovies": res[0].UserMovieId,
                //     "UserId": this.LoopBackAuth.getCurrentUserId(),
                //     "MovieId": MovieId,
                //     "Rating": $event.rating
                // }).subscribe(
                //     res => {
                //         console.log('upsert res', res)

                //     }
                // )
            },
            err => {
                console.log('err', err)

            }
        )
        // this.UserRating.setValue($event.rating);
    }

    ngOnChanges(changes: SimpleChanges){
        if( changes.filter ){
            this.filter = changes.filter.currentValue;
    
            this.serviceSub = this._service.on('change', this.filter ).subscribe(
                (instances: any) => {
                    if (instances instanceof Array) {                  
                        if ( this.fields === undefined ) {
                            this.fields = Object.keys(instances[0]);
                        }
                        //   instances.length = 4;
                        this.data = instances;
                        if( this.data.length == 0 ){
                            this.listIsClean = true;
                        }
                    } else {
                        console.log("errors : ", instances.error);
                    }
                },
                (error: any) => {
                    console.log("errors : ", error);
                }
            );
        }
        
    }

}
