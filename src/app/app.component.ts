import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RealTime } from './shared/sdk/services/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private isAuthorized : boolean = false;

  constructor(private realTime : RealTime, private router : Router) { }

  ngOnInit() {
    this.isAuthorized = true;
    this.realTime.onAuthenticated().subscribe(() => {
        console.log("app.component | onAuthenticated");
        
        this.isAuthorized = true;
        // this.router.navigateByUrl('/sesion-list');
    });
    
    this.realTime.onUnAuthorized().subscribe(() => {
        console.log("app.component | onUnAuthorized");

        this.isAuthorized = false;
        // this.router.navigateByUrl('/singup');
        
        this.realTime.onReady().subscribe();
    });
  }
}
