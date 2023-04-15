import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.css']
})
export class PlatformsComponent {
  constructor(private _ActivatedRoute:ActivatedRoute,private _GamesService:GamesService){} 
  platforms:any;
  platform:any;

  ngOnInit(): void {
   this._ActivatedRoute.paramMap.subscribe((params=>{
    this.platform=params.get('platforms');
    console.log(this.platform);

 
    
  }))
  this._GamesService.gameplatform(this.platform).subscribe(({
    next:(responce)=>this.platforms=responce,
    
    error:(err)=>
    {
      
      console.log(err);
      
      
      
    }
    
    }))

    
  
}
}

