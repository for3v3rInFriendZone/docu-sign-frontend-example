import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  iFrameUrl: string;

  ngOnInit() {
    this.iFrameUrl = window.history.state.data.redirectUrl;
  }

}
