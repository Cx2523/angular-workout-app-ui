import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './UserForms/Login/LoginForm.component';
import { LoginService } from './UserForms/shared/login.service';
import { appRouting } from './app.routing';
import { UserHomeComponent } from './UserHome/userhome.component';
import { HomePageComponent } from './HomePage/HomePage.component';
import { SignUpPageComponent } from './SignUpPage/SignUpPage.component';
import { SignUpFormComponent } from './UserForms/SignUp/SignUpForm.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginFormComponent,
    SignUpPageComponent,
    UserHomeComponent,
    SignUpFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    appRouting 
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
