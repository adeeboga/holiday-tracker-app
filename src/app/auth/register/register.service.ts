import { Injectable } from '@angular/core';
import { User } from '../login/user'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  cont;

  constructor() { }

  public registerUser( name : string, email : string, group : string, password : string){

    this.cont=new User(name, email, group, password);

    var testUser={ "name" :name, "email" : email, "group" : group, "password" : password};

    localStorage.setItem('testUser', JSON.stringify(testUser));

    console.log(localStorage.getItem('testUser'));

  }

}
