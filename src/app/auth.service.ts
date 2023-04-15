import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _httpclient:HttpClient,private _router:Router) {
      if (localStorage.getItem('usertoken') !==null)
     {
            this.decodeUserData();       
      }

   }

  isLogOut()
   {
     localStorage.removeItem("usertoken");
     this.userData.next(null);
     this._router.navigate(['/signin'])
   }
 
  decodeUserData()
  {
    let encodedToken= JSON.stringify( localStorage.getItem('usertoken'));
     let decodedToken:any = jwtDecode(encodedToken);
     console.log(decodedToken);
     this.userData.next(decodedToken);

     


  }


  userData=new BehaviorSubject(null);

  register(userData:object):Observable<any>
  {
     return this._httpclient.post('https://route-ecommerce.onrender.com/api/v1/auth/signup',userData)
  }

  
  Login(userData:object):Observable<any>
  {
     return this._httpclient.post('https://route-ecommerce.onrender.com/api/v1/auth/signin',userData)
  }
}
