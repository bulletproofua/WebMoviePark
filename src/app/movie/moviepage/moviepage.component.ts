import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { Movies, FireLoopRef } from '../../shared/sdk/models';
import { RealTime, ExternalServicesRatingsApi } from '../../shared/sdk/services';
import { LoopBackAuth, MoviesApi } from '../../shared/sdk/index';
import { OnDestroy, AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-moviepage',
  templateUrl: './moviepage.component.html',
  styleUrls: ['./moviepage.component.scss']
})
export class MoviepageComponent implements OnInit, OnDestroy, AfterViewInit {
  serviceRef: FireLoopRef<Movies>;

  private filter: object;

  private curentMovieId: string = "";
  private curentMovieInfo: any = {};
  private IMG: any = {};

  private displayIframe: boolean = false;

  constructor(
    private MoviesApi:MoviesApi, 
    private realTime: RealTime, 
    private router: Router,
    private ExternalServicesRatingsApi:ExternalServicesRatingsApi,
    private LoopBackAuth: LoopBackAuth,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngAfterViewInit(){
   
    console.log('this.curentMovieInfo.TrailerLink', this.curentMovieInfo.TrailerLink)
  }

  ngOnInit() {

    this.route.params.subscribe(
      params => {
        this.curentMovieId = params.movieId;
        this.MoviesApi.getPhotos(this.curentMovieId).subscribe(
          (res: any) => {
            this.IMG.PhotoId = res[0].PhotoId;
            this.IMG.Link = res[0].Link;
          }
        );
      }
    )

    this.MoviesApi.find({ where: { "MovieId": this.curentMovieId }} ).subscribe(
      res => {
        this.curentMovieInfo = res[0];
        this.curentMovieInfo.TrailerLink = this.curentMovieInfo.TrailerLink.replace("watch?v=", "embed/");
        this.displayIframe = true;
      }
    )

    this.ExternalServicesRatingsApi.find( { where: { "MovieId" : this.curentMovieId }}).subscribe(
      (res: any) => { 
        this.curentMovieInfo.IMDb = res[0].Rating; 
        this.curentMovieInfo.Metacritic = res[1].Rating; 
      }
    )

    this.MoviesApi.getGenres(this.curentMovieId).subscribe(
      (res: any) => { 
        this.curentMovieInfo.Genres = this.prepareArr(res, "GenreType");
      }
    );

    this.MoviesApi.getCountries(this.curentMovieId).subscribe(
      (res: any) => {
        this.curentMovieInfo.Countries = this.prepareArr(res, "CountryName");
      }
    );

    
  }

  prepareArr( res: any, type:any ){
    let arr = [];
    for (let index = 0; index < res.length; index++) {
      let element = "";
      if ( index != res.length-1 ) {
        element = res[index][type] + ",";
      } else {
        element = res[index][type];
      }          
      arr.push(element);
    }
    return arr;
  }

  ngOnDestroy() {
    if (this.serviceRef) {
        this.serviceRef.dispose();
    }
  }

  // onSelect(event: any) {
  //   this.router.navigateByUrl('/Movies/' + event.id);
  // }

}
