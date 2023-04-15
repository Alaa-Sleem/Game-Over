import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sortby',
  templateUrl: './sortby.component.html',
  styleUrls: ['./sortby.component.css']
})
export class SortbyComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute,private _GamesService:GamesService){} 
  sortsby:any;
  sortrby:any;

  ngOnInit(): void {
   this._ActivatedRoute.paramMap.subscribe((params=>{
    this.sortrby=params.get('sort');
    console.log(this.sortrby);

 
    
  }))
  this._GamesService.gamesortby(this.sortrby).subscribe(({
    next:(responce)=>this.sortsby=responce,
    
    error:(err)=>
    {
      
      console.log(err);
      
      
      
    }
    
    }))

    
  
}
}
