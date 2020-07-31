import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { User } from './user'

// userList[];
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // userList[];
  user = new User('Adelina', 'adeeboga@gmail.com', 'intern', 'parola');
  // user = new User('test1', 'test1', 'Test', 'parola');

  constructor(private router: Router) { }


  public checkUser(name: string, password: string) {
    if (name == 'admin' && password == 'admin') {
      this.router.navigateByUrl('/admin');
      alert("admin");
      console.log("admin");
    } else {
      if (this.user.name == name && this.user.password == password) {
        this.router.navigateByUrl('/home');
        console.log("Succes");
        alert("Buna, " + name);
      } else {
        console.log("Failed");
        alert("Wrong credentials");
      }
    }

  }
}
