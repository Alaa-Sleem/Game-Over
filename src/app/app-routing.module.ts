import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SortbyComponent } from './sortby/sortby.component';
import { CategoriesComponent } from './categories/categories.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NofoundComponent } from './nofound/nofound.component';
import { GamesdetailsComponent } from './gamesdetails/gamesdetails.component';

const routes: Routes = [
  { path: '', redirectTo:'signup',pathMatch:'full' },
  { path: 'home', component:HomeComponent },
  { path: 'sortby/:sort', component:SortbyComponent },
  { path: 'catrgories/:genre', component:CategoriesComponent },
  { path: 'platforms/:platforms', component:PlatformsComponent },
  { path: 'gamesdetails/:id', component:GamesdetailsComponent },
  { path: 'signin', component:SigninComponent },
  { path: 'signup', component:SignupComponent },
  { path: '**', component:NofoundComponent },


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
