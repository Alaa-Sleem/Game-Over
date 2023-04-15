import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';



@Component({
  selector: 'app-gamesdetails',
  templateUrl: './gamesdetails.component.html',
  styleUrls: ['./gamesdetails.component.css']
})
export class GamesdetailsComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute,private _GamesService:GamesService){} 
  gamesdetails:any;
  gamesid:any;
  ngOnInit(): void {
   this._ActivatedRoute.paramMap.subscribe((params=>{
    this.gamesid=params.get('id')
  })
    );
    this._GamesService.gamesdetails(this.gamesid).subscribe(({
      next:(responce)=>this.gamesdetails=responce
      
    }))
  
  }

}
