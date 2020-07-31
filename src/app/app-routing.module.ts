import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home/home.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component'


const routes: Routes = [{path: 'auth',
                        loadChildren: () => import ('./auth/auth.module').then( m => m.AuthModule)},
                        {path: 'home', component: HomeComponent},
                        {path: 'login', component: LoginComponent},
                        {path: 'register', component: RegisterComponent},
                        {path: '', redirectTo: 'home', pathMatch: 'full'},
                        
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
