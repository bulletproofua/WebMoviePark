import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { Movies, FireLoopRef } from '../../shared/sdk/models';
import { RealTime } from '../../shared/sdk/services';

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

  constructor(private realTime: RealTime, private router: Router) { }

  ngOnInit() {
    this.realTime.onReady().subscribe(
      (res) => {
        console.log('this.serviceRef', this.serviceRef)
        this.serviceRef = this.realTime.FireLoop.ref<Movies>(Movies);
      //  this.setup() 
      },
      (err:any) => {
        console.log('err', err)
      })
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
