import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { LoopBackAuth } from '../shared/sdk/services/core/auth.service';
import { UserApi } from '../shared/sdk/services';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { MoviesApi } from '../shared/sdk/index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, DoCheck, OnDestroy {

  private isAuthorized: boolean = false;
  private userName: string = "User";
  
  constructor(private LoopBackAuth: LoopBackAuth, private userApi: UserApi,  private router: Router, private MoviesApi: MoviesApi) { }
  
  ngOnInit() {
    this.userName = this.LoopBackAuth.getCurrentUserData().username;
    // console.log('--------------------------')
    // console.log('userName', this.userName)
    // console.log('this.LoopBackAuth.getCurrentUserData()', this.LoopBackAuth.getCurrentUserData())
    // console.log('--------------------------')



    let filter = {
      include:[
        { 
          relation: "UsersMovies", 
              // scope:{
              //   where: {
              //     "Rating": { neq: 0 } 
              //   }
              // }
        }
      ]
    }

    // this.MoviesApi.find( filter ).subscribe(
    //   (res:any) => {
    //     console.log('res', res)

    //     res.forEach(element1 => {
    //       let curentRating: any = 0;
    //       if( element1.UsersMovies.length != 0 ){
    //         element1.UsersMovies.forEach(element2 => {
    //           curentRating += element2.Rating;
    //         });
    //         curentRating = (curentRating/element1.UsersMovies.length).toFixed(1);
    //         console.log('curentRating', +curentRating)
    //         console.log('curentRating', curentRating)

            
    //       }
    //       element1.Rating = curentRating;
    //       this.MoviesApi.updateAttributes( element1.MovieId, element1 ).subscribe(
    //         res => {
    //           console.log('res', res)
    //         }, 
    //         err => {
    //           console.log('err', err)
    //         }
    //       );
    //       console.log('curentRating  === > ', element1.Title + " -> " +  curentRating)

    //     });
    //   }
    // )



  }


  ngDoCheck() {
    if (this.LoopBackAuth.getAccessTokenId() == null || this.LoopBackAuth.getAccessTokenId() === undefined) {
      this.isAuthorized = false;
    } else {
      this.isAuthorized = true;
    }
  }

  logout() {
    this.userApi.logout().subscribe(
        () => console.log("Logged out : "),
        (err) => console.log("ERROR : ", err)
    );
    this.LoopBackAuth.clear();
    this.isAuthorized = false;
    this.router.navigate(['/login']);
  }

  toLogin(){
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy______ NAVBAR', )
  }

  onOpenProfile(){
    console.log("onOpenProfile");
    this.router.navigate(['/User']);
  }

}
