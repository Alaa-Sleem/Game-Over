import { GamesService } from './../games.service';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  IsLogin:boolean=false;
  
  constructor(private _auth:AuthService  ,private _ActivatedRoute:ActivatedRoute,private _GamesService:GamesService){

   _auth.userData.subscribe({
    next:()=>
    {
      if (_auth.userData.getValue() !==null) {
      
        this.IsLogin=true
        
      }
      else{
        this.IsLogin=false
      }
    }
   })

  }


  categories: string[] = [];
  platforms: string[] = [];
  gamecat:any;
  gamescategoris:any;
  platforming: string[] = ['pc','browser'];
  sortby:string[] = ['release-date','alphaptical','popularty','relevance'];


  ngOnInit(): void {
   
     this._GamesService.handelgames().subscribe(({
       next:(responce)=>
        {
          let categorySet = new Set<string>();
          for (let resp of responce) {

            categorySet.add(resp.genre);
            this.categories = Array.from(categorySet).sort();
           
            
          }
        }
 
     }))

''
  
    

   
   }

  LogOut()
  {
    this._auth.isLogOut();
  }

}
