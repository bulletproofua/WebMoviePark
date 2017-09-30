import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SDKBrowserModule } from './shared/sdk/index';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SingupComponent } from './login/singup/singup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SingupComponent
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
          path: '**',
          component: SingupComponent
      }
  ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
