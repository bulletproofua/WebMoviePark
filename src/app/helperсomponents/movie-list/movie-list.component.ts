import { Component, Input, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Movies, FireLoopRef } from '../../shared/sdk/models';
import { Subscription } from 'rxjs/Subscription';
import { OnChanges, SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { UserApi, MoviesApi, UsersMoviesApi, LoopBackAuth, ExternalServicesApi, ExternalServicesRatingsApi } from '../../shared/sdk/index';
import * as _ from 'lodash';
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
    _service: any;
    
    constructor(
        private userApi : UserApi, 
        private router : Router, 
        private MoviesApi: MoviesApi, 
        private UsersMoviesApi: UsersMoviesApi,
        private LoopBackAuth: LoopBackAuth,
        private ExternalServicesRatingsApi:ExternalServicesRatingsApi
    ) { }
    
    @Input() filter: object;
    @Input() filterMode: boolean;
    
    @Input() set service(ref: any) {
        if (ref) {
            this._service = ref;
            this.setup();
        }
    }

    setup(){
        this.ngOnDestroy();
        if(  this.filter ) { 
            this.serviceSub = this._service.on('change', this.filter ).subscribe(
                (instances: any) => {
                    // console.log('instances', instances)
                    if (instances instanceof Array) {                              
                        //   instances.length = 14;
                        this.data = instances;
                        this.data.forEach( (val, index) => {                             
                            this.ExternalServicesRatingsApi.find( { where: { "MovieId" :val.MovieId }}).subscribe(
                                res => { 
                                    res.forEach( (elem: any) => {
                                        if(elem && elem.Rating ){
                                            switch (elem.ExternalServiceId) {
                                                case 1:
                                                    val.IMDb = elem.Rating;
                                                    break;
                                                case 2:
                                                    val.Metacritic = elem.Rating;
                                                    break;
                                            
                                                default:
                                                    val.IMDb = "-";
                                                    val.Metacritic = "-";
                                                    break;
                                            }
                                        }
                                    })                                   
                                }
                            )
                            
                            if( val.UsersMovies[0] && this.filterMode ){
                                delete this.data[index];
                            } else {
                                val.UsersMovies.push({"Rating": 0});                                
                                this.MoviesApi.getPhotos(val.MovieId).subscribe(
                                    (res: any) => {
                                        val.PhotoId = res[0].PhotoId;
                                        val.Link = res[0].Link;
                                    },
                                    (err: any) => {
                                        console.log('err', err)
                                    }
                                )                          
                            }
                        })

                        this.data = _.without( this.data , undefined) 
                    } else {
                        console.log(" movie-list.component errors 1  : ", instances.error);
                    }
                },
                (error: any) => {
                    console.log(" movie-list.component errors 2  : ", error);
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
        // console.log('single onRatingChange rating: ', $event.rating);   
    }
    
    onClick($event: OnClickEvent, MovieId: any): void {
        console.log('single onClick rating: ', $event.rating);
        console.log('this.LoopBackAuth.getCurrentUserId(),', this.LoopBackAuth.getCurrentUserId())
        console.log('MovieId', MovieId)
        this.UsersMoviesApi.find(
            {where:{ 
                "UserId": this.LoopBackAuth.getCurrentUserId(),
                 "MovieId": MovieId}
                }
            ).subscribe(

            (res:any) => {

                console.log('res', res)                
                if(res[0] ) { 
                    console.log('res -->', res[0].UserMovieId)
                    this.UsersMoviesApi.updateAttributes(
                        res[0].UserMovieId, 
                        { 
                            "UserId": this.LoopBackAuth.getCurrentUserId(),
                            "MovieId": MovieId,
                            "Rating": $event.rating * 2
                        }
                    ).subscribe(
                        res => {
                            console.log('upsert res', res)
                        }
                    )
                }  else {
                    this.UsersMoviesApi.upsert({
                        "UsersMovies": "",
                        "UserId": this.LoopBackAuth.getCurrentUserId(),
                        "MovieId": MovieId,
                        "Rating": $event.rating * 2
                    }).subscribe(
                        res => {
                            console.log('upsert res', res)    
                        }
                    )
                }
            },
            err => {
                console.log('err', err)

            }
        )
    }

    ngOnChanges(changes: SimpleChanges){
        if( changes.filter ){
            this.filter = changes.filter.currentValue;
            console.log('filter', this.filter)

            this.setup();
        }
        
    }

}
