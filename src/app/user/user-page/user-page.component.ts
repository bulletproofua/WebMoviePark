import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FireLoopRef, Movies, LoopBackAuth, UsersMoviesApi, MoviesApi } from '../../shared/sdk/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserPageComponent implements OnInit {

  private filmIdArr: any[] = [];
  private UserMovieIdsArr: any[] = [];
  private filter: object;
  private serviceRef: FireLoopRef<Movies>;

  private CFstatus: boolean = false;
  private AprioriStatus: boolean = false;
  private AACFstatus: boolean = false;

  private User: any;

  constructor (
    private LoopBackAuth: LoopBackAuth, 
    private router: Router, 
    public UsersMoviesApi: UsersMoviesApi,
    public MoviesApi: MoviesApi
  ) { }

  ngOnInit() {
    this.User = this.LoopBackAuth.getCurrentUserData();
    console.log('this.User', this.User)

    this.filter = { 
      include:[
        { 
          relation: "UsersMovies", 
              scope:{
                where: {
                  "UserId": this.LoopBackAuth.getCurrentUserId(),
                  "Rating": { neq: 0 } 
                }
              }
        }
      ], where:{ UsersMovies: {neq: undefined}}, order: 'MovieId DESC', limit:50};

  }

  onSelect(event: any) {
    this.router.navigateByUrl('/Movies/' + event.id);
  }

}
