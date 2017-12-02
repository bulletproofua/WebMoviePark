import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MoviesApi, CountriesApi, GenresApi, MoviesCountriesApi, MoviesGenresApi } from '../../shared/sdk/index';

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
  private RatingAgeLimit: string = null;
  private Budget: string = null;
  private TrailerLink: string = null;

  constructor( 
    private MoviesApi: MoviesApi, 
    private CountriesApi: CountriesApi, 
    private GenresApi: GenresApi, 
    private MoviesCountrisApi: MoviesCountriesApi,
    private MoviesGenresApi: MoviesGenresApi
  
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

  onAddMovie(){
    console.log("------------------------------------")
    console.log('this.Title         ', this.Title)
    console.log('this.Description   ', this.Description)
    console.log('this.Length        ', this.Length)
    console.log('this.Slogan        ', this.Slogan)
    console.log('this.PremiereDate  ', this.PremiereDate)
    console.log('this.RatingAgeLimit', this.RatingAgeLimit)
    console.log('this.Budget        ', this.Budget)
    console.log('this.TrailerLink   ', this.TrailerLink)
    console.log('SelectedGenresList', this.SelectedGenresList)
    console.log('SelectedCountryNamesList', this.SelectedCountryNamesList)

    let data = {
      "MovieId": 0,
      "Title":  this.Title || null,
      "Description": this.Description || null,
      "Length": this.Length || null,
      "Slogan": this.Slogan || null,
      "PremiereDate": this.PremiereDate || null,
      "RatingAgeLimit": this.RatingAgeLimit || null,
      "Budget": this.Budget || null,
      "TotalViews": 0,
      "Rating": 0,
      "TrailerLink": this.TrailerLink || null
    }

    this.MoviesApi.create(data).subscribe(
      res => {
        console.log('res', res)
        this.MoviesApi.createPhotos(
          res.MovieId,
          {
            "Link": "images/posters/"+ res.Title +".jpg",
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
