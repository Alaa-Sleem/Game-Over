import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { SortbyComponent } from './sortby/sortby.component';
import { CategoriesComponent } from './categories/categories.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NofoundComponent } from './nofound/nofound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GamesdetailsComponent } from './gamesdetails/gamesdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlatformsComponent,
    SortbyComponent,
    CategoriesComponent,
    SigninComponent,
    SignupComponent,
    NofoundComponent,
    NavbarComponent,
    FooterComponent,
    GamesdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
