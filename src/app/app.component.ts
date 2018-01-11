import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RealTime } from './shared/sdk/services/core';
import { LoopBackAuth } from './shared/sdk/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private debugAppComponent: boolean = true;

  constructor(private router: Router,  private realTime: RealTime, private LoopBackAuth: LoopBackAuth) { }

  ngOnInit() {
    console.log("Init app.component - > init!")
    this.onStart();

    this.realTime.IO.on("reconnecting").subscribe(
      res => {
        console.log("Connection is lost. Trying to reconnect...");
      }
    )

    // this.realTime.IO.on("unauthorized").subscribe(
    //   (res) => {
    //     if( this.debugAppComponent ) console.log('app.copmonent | unauthorized | CurrentUserData ', this.LoopBackAuth.getCurrentUserData())
        
    //     if( !this.isLoged() ){
    //       if ( this.router.url !== "/login"){
    //         console.log('  unauthorized user ! -> to singin')
    //         this.router.navigate(['/login']);
    //       }
    //     }
    //   },
    //   (err) => {
    //     console.log('err ----------> ', err)
    //   }
    // )
    
  }

  isLoged(){
    let userData = this.LoopBackAuth.getCurrentUserData() 
    if( userData === null || userData === undefined ){
        return false;
    }
    return true;
  }

  onStart(){
    if( this.debugAppComponent ) console.log('app.copmonent | onStart ------>')
    this.realTime.onReady().subscribe(
      (res: any) => {

      },
      (error: any) => {
        console.log('APPCOMPONENT | realTime | onReady | error => ', error);
      }
    );
  }

}
