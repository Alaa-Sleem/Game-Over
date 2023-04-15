import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  constructor(private _ActivatedRoute:ActivatedRoute,private _GamesService:GamesService){} 
  categories: any[] = [];
  gamecat:any;
  gamescategoris:any;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params=>{
      this.gamecat=params.get('genre')
      console.log(this.gamecat);
      this._GamesService.gamecategories(this.gamecat).subscribe(({
        next:(response)=>this.gamescategoris=response
          
          
        
      }))
    })
      );

    

   }
 }
   
