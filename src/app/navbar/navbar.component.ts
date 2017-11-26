import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { LoopBackAuth } from '../shared/sdk/services/core/auth.service';
import { UserApi } from '../shared/sdk/services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, DoCheck {

  private isAuthorized: boolean = false;
  
  constructor(private LoopBackAuth: LoopBackAuth, private userApi: UserApi,  private router: Router) { }
  
  ngOnInit() {
  }

  ngDoCheck() {
    if (this.LoopBackAuth.getAccessTokenId() == null || this.LoopBackAuth.getAccessTokenId() === undefined) {
      this.isAuthorized = false;
    } else {
      this.isAuthorized = true;
      // console.log('this.isAuthorized',this.LoopBackAuth)
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

}
