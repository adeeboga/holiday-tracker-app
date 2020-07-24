import { Component, OnInit } from '@angular/core';
import { RegisterService} from './register.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  registerUser(event){
    event.preventDefault();
    console.log(event);
    var name = event.target.elements[0].value;
    var email = event.target.elements[1].value;
    var group = event.target.elements[2].value;
    var password = event.target.elements[3].value;
    // debugger;
    this.registerService.registerUser(name, email, group, password);

  }

}
