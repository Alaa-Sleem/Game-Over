import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor( private _auth:AuthService , private _router:Router){}
  IsLoading:boolean=false;
  ApiError:string=''; 

  registerForm:FormGroup =new FormGroup ({
    name:new FormControl(null,[Validators.required,Validators.maxLength(10),Validators.minLength(2)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
   password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
   rePassword:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]) ,
  phone:new FormControl(null,[Validators.required,Validators.pattern(/01[0125][0-9]{8}$/)]), 
  })
  
  handeRegister(registerForm:FormGroup)
  {
    this.IsLoading=true; 
     if (registerForm.valid)
    {

       this. _auth.register(registerForm.value).subscribe({
        next:(responce)=>{
          // navigate here
          console.log(responce);
          if (responce.message ==="success") {
             this.IsLoading=false;
             this._router.navigate(['/signin'])
            
            
          }
        },

        error:(err)=>
        {
          this.IsLoading=false;
          this.ApiError= err.error.message;
          console.log(this.ApiError);
          
          
          
        }
        
       })
     }    
  }

}
