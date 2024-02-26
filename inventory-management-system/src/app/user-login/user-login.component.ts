import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  signupUser:any=[];
  signupobj:any={
    userName:"",
    password:"",
    email:""
  };
  loginobj:any={
    userName:"",
    password:""
  };

}

