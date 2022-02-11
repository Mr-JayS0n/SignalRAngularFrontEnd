import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class SignalrService {
  constructor(
    //added in tutorial 2
    public toastr: ToastrService,
    public router: Router
  ) { }

//alternatively can use "hubConnection:signalR.HubConnection;", it will pose error.
hubConnection:any;

//added in tutorial 2
personName: string = '';

//Start Connection Function
startConnection = () => 
{
  //define connection type and settings for hubconnection
  this.hubConnection = new signalR.HubConnectionBuilder()
  .withUrl('https://localhost:5001/toastr',{
    skipNegotiation: true,
    transport: signalR.HttpTransportType.WebSockets
  })
  .build();

  this.hubConnection
  .start().then(() =>
  { //Arrow function/Lambda Expression
    console.log('HubConnectionStarted!');
  }).
  catch((err:any) => console.log('Error while starting connection: '+ err));
}

//added in tutorial 1
/*
askServer()
{
  this.hubConnection.invoke("askServer","hey")
  .catch((err:any) => console.error(err));
}
askServerListener()
{
  this.hubConnection.on("askServerResponse", (someText:any) => {
    console.log(someText);
  })
}
*/
}
