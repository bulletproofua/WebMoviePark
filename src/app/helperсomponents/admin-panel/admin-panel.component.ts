import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MoviesApi, CountriesApi, GenresApi, MoviesCountriesApi, MoviesGenresApi, ExternalServicesRatingsApi } from '../../shared/sdk/index';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminPanelComponent implements OnInit {

  private CountriesList: Array<any> = [];
  private GenresList: Array<any> = [];
  private SelectedGenresList: Array<any> = [];
  private SelectedCountryNamesList: Array<any> = [];
  
  private Title: string = null;
  private Description: string = null;
  private Length: string = null;
  private Slogan: string = null;
  private PremiereDate: string = null; 
  private RatingAgeLimit: string = "PG-13";
  private Budget: string = null;
  private BudgetOption: string = "m";
  private TrailerLink: string = null;
  private ExternalServicesRatings1: number = null;
  private ExternalServicesRatings2: number = null;


  constructor( 
    private MoviesApi: MoviesApi, 
    private CountriesApi: CountriesApi, 
    private GenresApi: GenresApi, 
    private MoviesCountrisApi: MoviesCountriesApi,
    private MoviesGenresApi: MoviesGenresApi,
    private ExternalServicesRatings: ExternalServicesRatingsApi
  
  ) { }

  ngOnInit() {

    this.CountriesApi.find().subscribe(
      res => {
          this.CountriesList = res;
      }
    )

    this.GenresApi.find().subscribe(
      res => {
        this.GenresList = res;
      }
    )
  }


  onAdd(arr:Array<any>, context:any){    
    arr.push(context);
  }

  onDel(arr:Array<any>, context:any){
    let index = arr.indexOf(context);
    arr.splice(index, 1);
  }

  postExternalServicesRatings( ES: number, MovieId: number, Rating: number){
    if( Rating !== null || Rating !== undefined ){
      this.ExternalServicesRatings.create(
        {
          "ExternalServiceId": ES,
          "MovieId": MovieId,
          "Rating": Rating
        }
      ).subscribe(
        res => {
          console.log('ExternalServicesRatings res ', res)
        },
        err => {
          console.log('ExternalServicesRatings err', err)
        }
      )
    }
  }

  onReset(){
    this.Title                    = null;
    this.Description              = null;
    this.Length                   = null;
    this.Slogan                   = null;
    this.PremiereDate             = null;
    this.RatingAgeLimit           = "PG-13";
    this.Budget                   = null;
    this.BudgetOption             = "m";
    this.TrailerLink              = null;
    this.SelectedGenresList       = [];
    this.SelectedCountryNamesList = [];
    this.ExternalServicesRatings1 = null;
    this.ExternalServicesRatings2 = null;

    console.log("RESER -------- done");
  }

  onAddMovie(){
    console.log("------------------------------------")
    console.log('this.Title         ', this.Title)
    console.log('this.Description   ', this.Description)
    console.log('this.Length        ', this.Length)
    console.log('this.Slogan        ', this.Slogan)
    console.log('this.PremiereDate  ', this.PremiereDate)
    console.log('this.RatingAgeLimit', this.RatingAgeLimit)
    console.log('this.Budget        ', this.Budget)
    console.log('this.BudgetOption  ', this.BudgetOption)    
    console.log('this.TrailerLink   ', this.TrailerLink)
    console.log('SelectedGenresList', this.SelectedGenresList)
    console.log('SelectedCountryNamesList', this.SelectedCountryNamesList)

    if( this.Budget === null || this.Budget === undefined) {
      this.Budget = null;
    } else {
      this.Budget = this.Budget + ((this.BudgetOption === "m") ? "000000" : "000");
    }

    let data = {
      "MovieId": 0,
      "Title":  this.Title || null,
      "Description": this.Description || null,
      "Length": this.Length || null,
      "Slogan": this.Slogan || null,
      "PremiereDate": this.PremiereDate || null,
      "RatingAgeLimit": this.RatingAgeLimit || null,
      "Budget": this.Budget,
      "TotalViews": 0,
      "Rating": 0,
      "TrailerLink": this.TrailerLink || null
    }
    console.log('data', data)

    this.MoviesApi.create(data).subscribe(
      res => {
        console.log('res', res)
        var title = res.Title.replace(":", "");
        this.MoviesApi.createPhotos(
          res.MovieId,
          {
            "Link": "images/posters/"+ title +".jpg",
            "PhotoTypeId": 1
          }
        ).subscribe(
          res => {
            console.log('countPhotos res', res)
          },
          err => {
            console.log('countPhotos err', err)
          }
        )
        
        this.postExternalServicesRatings(1, res.MovieId, this.ExternalServicesRatings1 )
        this.postExternalServicesRatings(2, res.MovieId, this.ExternalServicesRatings2 )

        this.SelectedCountryNamesList.forEach(element =>{
          this.MoviesCountrisApi.create({ 
            "MovieId": res.MovieId,
            "CountryId": element.CountryId
          }).subscribe(
            res => {
              console.log('MoviesCountrisApi res', res)

            },
            err => {
              console.log('MoviesCountrisApi err', err)
            }
          )
        })
        
        this.SelectedGenresList.forEach(element =>{
          this.MoviesGenresApi.create(
            {
              "MovieId": res.MovieId,
              "GenreId": element.GenreId
            }
          ).subscribe(
            res => {
              console.log('MoviesGenresApi res', res)
            },
            err => {
              console.log('MoviesGenresApi err', err)
            }
          )
        })
      }, 
      err => {
        console.log('create err', err)
      }
    )
  }

}
