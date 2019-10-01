import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Break out of iFrame
    if (window.location !== window.top.location) {
      window.top.location = window.location;
    }
  }

}
