import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { LoopBackAuth } from '../shared/sdk/services/core/auth.service';
import { UserApi } from '../shared/sdk/services';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, DoCheck, OnDestroy {

  private isAuthorized: boolean = false;
  private userName: string = "User";
  
  constructor(private LoopBackAuth: LoopBackAuth, private userApi: UserApi,  private router: Router) { }
  
  ngOnInit() {
    this.userName = this.LoopBackAuth.getCurrentUserData().username;
    console.log('--------------------------')
    console.log('userName', this.userName)
    console.log('this.LoopBackAuth.getCurrentUserData()', this.LoopBackAuth.getCurrentUserData())
    console.log('--------------------------')
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

  ngOnDestroy() {
    console.log('ngOnDestroy______ NAVBAR', )
  }

  onOpenProfile(){
    console.log("onOpenProfile");
  }

}
