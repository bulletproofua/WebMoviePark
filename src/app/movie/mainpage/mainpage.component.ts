import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { Movies, FireLoopRef } from '../../shared/sdk/models';
import { RealTime } from '../../shared/sdk/services';
import { LoopBackAuth, MoviesApi } from '../../shared/sdk/index';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  serviceRef: FireLoopRef<Movies>;
  // fields = ["id", "createdAt", "updatedAt"];

  // options = {  

  // };
  private filter: object;
  constructor(private MoviesApi:MoviesApi, private realTime: RealTime, private router: Router, private LoopBackAuth: LoopBackAuth) { }

  ngOnInit() {
    this.serviceRef = this.realTime.FireLoop.ref<Movies>(Movies);

    let userData = this.LoopBackAuth.getCurrentUserData();
    
    if( userData === null || userData === undefined ){            
        console.log("    unauthorized user ! -> to login")
      this.router.navigate(['/login']);
    } else {
      this.setup();
    }

  }

  setup(): void {
    console.log(' MAIN PAGE ___ setup --->')
    this.ngOnDestroy();

    // this.MoviesApi.find({
    //   include:{ relation: "photos",
    //     scope:{
    //         where:{
    //             "MovieId": 1
    //         }
    //     } 
    
    // } 


    // }).subscribe(
    //   res => {
    //     console.log('res', res)
    //   }
    // )

    this.serviceRef = this.realTime.FireLoop.ref<Movies>(Movies);

    this.filter = { 
    include:{ 
        relation: "UsersMovies",
            scope:{
                where:{
                    "UserId": this.LoopBackAuth.getCurrentUserId()
                }
            } 
        }, order: 'MovieId ASC' };
        
    console.log(' MAIN PAGE ->  serviceRef', this.serviceRef)
  }

  ngOnDestroy() {
    if (this.serviceRef) {
        this.serviceRef.dispose();
    }
  }

  onSelect(event: any) {
    this.router.navigateByUrl('/Movies/' + event.id);
  }

}
