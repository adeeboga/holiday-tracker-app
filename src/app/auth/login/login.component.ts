import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }
 

  loginUser(event) {
    event.preventDefault();
    console.log(event);
    var email = event.target.elements[1].value;
    var password = event.target.elements[2].value;
    console.log(email);
    console.log(password);
    this.loginService.checkUser(email, password);
  }

}
