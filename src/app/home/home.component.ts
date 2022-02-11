import { Component, OnInit } from '@angular/core';
import { SignalrService } from '../signalr.service';// Added in tutorial 2

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public signalrService: SignalrService //Added in tutorial 2
  ) { }

  ngOnInit(): void {
  }

}
