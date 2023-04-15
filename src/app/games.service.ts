import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable , BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private _httpclient:HttpClient) {}
  
  handelgames():Observable<any>
  {
    let headers = new HttpHeaders({
      'X-RapidAPI-Key': 'e962ada5cdmshd43b9756454ff1bp1c698ajsn77dc4c1ea324',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    });

   return this._httpclient.get('https://free-to-play-games-database.p.rapidapi.com/api/games', {
        headers:headers
      })
     
  }

  gamesdetails(id:string):Observable<any>
  {
    let headers = new HttpHeaders({
      'X-RapidAPI-Key': 'e962ada5cdmshd43b9756454ff1bp1c698ajsn77dc4c1ea324',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    });

   return this._httpclient.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, {
        headers:headers
      })
  }

  gamecategories(genre:string):Observable<any>
  {
    let headers = new HttpHeaders({
      'X-RapidAPI-Key': 'e962ada5cdmshd43b9756454ff1bp1c698ajsn77dc4c1ea324',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    });

   return this._httpclient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${genre}`, {
        headers:headers
      })
  }
  gameplatform(platform:string):Observable<any>
  {

    
    let headers = new HttpHeaders({
      'X-RapidAPI-Key': 'e962ada5cdmshd43b9756454ff1bp1c698ajsn77dc4c1ea324',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    });

   return this._httpclient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${platform}`, {
        headers:headers

      })
      
  }


  gamesortby(sort:string):Observable<any>
  {

    
    let headers = new HttpHeaders({
      'X-RapidAPI-Key': 'e962ada5cdmshd43b9756454ff1bp1c698ajsn77dc4c1ea324',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    });

   return this._httpclient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${sort}`, {
        headers:headers

      })
      
  }
}
