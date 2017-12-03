import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SDKBrowserModule } from './shared/sdk/index';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainpageComponent } from './movie/mainpage/mainpage.component';
import { RecommendationsComponent } from './movie/recommendations/recommendations.component';
import { RatingComponent } from './helperсomponents/rating/rating.component';
import { MovieListComponent} from './helperсomponents/movie-list/movie-list.component';

import { SingupComponent } from './login/singup/singup.component';
import { SinginComponent } from './login/singin/singin.component';
import { MainComponent } from './login/main/main.component';
import { AdminPanelComponent } from './helperсomponents/admin-panel/admin-panel.component';

import { StarRatingModule } from 'angular-star-rating';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SingupComponent,
    MainpageComponent,
    RecommendationsComponent,
    RatingComponent,
    MovieListComponent,
    SinginComponent,
    MainComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StarRatingModule.forRoot(),
    SDKBrowserModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'login',
        component: MainComponent
      },
      {
        path: 'admin',
        component: AdminPanelComponent
      },
      {
        path: 'Movies',
        component: MainpageComponent
      },
      {
        path: 'Recommendations',
        component: RecommendationsComponent
      },
      {
        path: '**', 
        component: SingupComponent
      }
  ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
