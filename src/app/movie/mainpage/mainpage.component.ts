import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { Movies, FireLoopRef } from '../../shared/sdk/models';
import { RealTime } from '../../shared/sdk/services';
import { LoopBackAuth } from '../../shared/sdk/index';

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
  // private filter: object =  {order: 'MovieId ASC' };
  constructor(private realTime: RealTime, private router: Router, private LoopBackAuth: LoopBackAuth) { }

  ngOnInit() {
    this.serviceRef = this.realTime.FireLoop.ref<Movies>(Movies);

    let userData = this.LoopBackAuth.getCurrentUserData();
    
    if( userData === null || userData === undefined ){            
        console.log("    unauthorized user ! -> to login")
      this.router.navigate(['/login']);
    }
  }

  setup(): void {
    this.ngOnDestroy();

    this.serviceRef = this.realTime.FireLoop.ref<Movies>(Movies);
    console.log('this.serviceRef', this.serviceRef)
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
