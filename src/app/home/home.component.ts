import { Component,OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private _http:HttpClient,private _games:GamesService ){}
  
  games:any[]=[];

  ngOnInit(): void {

    this._games.handelgames().subscribe({
      next:(responce:any) => this.games=responce
      
      
      
    })

    
    
    
    
       
  }
}

