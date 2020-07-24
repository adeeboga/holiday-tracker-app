import { Injectable } from '@angular/core';

import { User } from './user'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user = new User('Adelina', 'adeeboga@gmail.com', 'intern','parola');

  constructor() { }


  public checkLogin(email : string, password : string){
    if(this.user.email == email && this.user.password == password){
      alert('Hi '+name);
    }else{
      alert("Something went wrong!!")
    }
  }

}
