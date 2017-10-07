import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SDKBrowserModule } from './shared/sdk/index';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SingupComponent } from './login/singup/singup.component';
import { MainpageComponent } from './movie/mainpage/mainpage.component';
import { RecommendationsComponent } from './movie/recommendations/recommendations.component';
import { MovieListComponent } from './helperсomponents/movie-list/movie-list.component;
import { RatingComponent } from './helpercomponents/rating/rating.component'';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SingupComponent,
    MainpageComponent,
    RecommendationsComponent,
    MovieListComponen,
    RatingComponentt
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SDKBrowserModule.forRoot(),
    RouterModule.forRoot([
      {
          path: 'singup',
          component: SingupComponent
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
