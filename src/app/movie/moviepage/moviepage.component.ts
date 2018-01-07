import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { Movies, FireLoopRef } from '../../shared/sdk/models';
import { RealTime } from '../../shared/sdk/services';
import { LoopBackAuth, MoviesApi } from '../../shared/sdk/index';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-moviepage',
  templateUrl: './moviepage.component.html',
  styleUrls: ['./moviepage.component.scss']
})
export class MoviepageComponent implements OnInit, OnDestroy {
  serviceRef: FireLoopRef<Movies>;

  private filter: object;
  constructor(private MoviesApi:MoviesApi, private realTime: RealTime, private router: Router, private LoopBackAuth: LoopBackAuth) { }

  ngOnInit() {

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
