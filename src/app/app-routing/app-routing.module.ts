import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '../home/home.component';
import { AuthComponent } from '../auth/auth.component';

import { Routes,RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '', redirectTo: 'auth', pathMatch: 'full' 
  },
  { 
    path: 'auth', component: AuthComponent 
  },
  {     
    path: 'home', component: HomeComponent 
  },
  { 
    path: '**', redirectTo: 'auth' , pathMatch: 'full'
   }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
