import { Injectable } from '@angular/core';
import {User } from '../_models/user';
import { Teams } from '../_models/teams.enum';
import { TypeUsers} from '../_models/typeUsers.enum'
@Injectable({
  providedIn: 'root'
})
export class AuthService {



  //public IoanaHoliday = new Holiday(new Date(2020, 7, 20), new Date(2020, 7, 29));
  //public TonyHoliday = new Holiday(new Date(2020, 7, 21), new Date(2020, 7, 21));


  public usersList: User[] = [
    new User('adeeboga@gmail.com', 'parola', TypeUsers.Admin,Teams.Intern),
    new User('test1', 'parola',TypeUsers.User,Teams.Test),
    new User('test2', 'parola',TypeUsers.User,Teams.Test),
    new User('test3', 'parola', TypeUsers.User, Teams.Test )];

  public login(email: string, password: string): boolean {
    for (const user of this.usersList) {
      if (email === user.email && password === user.password) {
        localStorage.setItem('email', user.email);
        localStorage.setItem('team', user.team);
        return true;
      }
    }
    return false;
  }

  public register(user: User): boolean {
    if (this.usersList.filter(a => a.email === user.email).length > 0) {
      return false;
    }
    this.usersList.push(user);
    return true;
  }

  public logOut(): boolean {
    if (this.isLoggedIn) {
      localStorage.removeItem('email');
      localStorage.removeItem('team');
      return true;
    }
    return false;
  }
  public isLoggedIn(): boolean {
    return (localStorage.getItem('email') != null);
  }

  public getUser(email: string): User {
    return this.usersList.find(a => a.email === email);
  }

  public getLoggedInUser(): User {
    return this.getUser(localStorage.getItem('email'));
  }



}
