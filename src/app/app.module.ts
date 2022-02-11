//added in tutorial 2
import { SignalrService } from './signalr.service'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ToastrModule } from 'ngx-toastr';  //used for create notification/msg popup
//ref Toastr
//https://www.c-sharpcorner.com/article/implement-toastr-notification-in-angular-7/
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { timeout } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

    ToastrModule.forRoot({
      enableHtml: true,
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
