import { Component, OnDestroy, OnInit } from '@angular/core';
import { SignalrService } from './signalr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  constructor(public signalrservice: SignalrService)
  {}
  ngOnInit(): void {
      this.signalrservice.startConnection();
      /*
      //Added in Tutorial 1
      setTimeout(() =>
      {
        this.signalrservice.askServerListener();
        this.signalrservice.askServer();
      },2000);
      */
  }

  ngOnDestroy(): void {
      this.signalrservice.hubConnection.off("askServerResponse");
  }
}