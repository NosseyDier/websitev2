import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bot-bar',
  templateUrl: './bot-bar.component.html',
  styleUrls: ['./bot-bar.component.css']
})
export class BotBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openMail() {
    window.alert("Email me at ...");
  }

  openGH() {
    window.alert("Email me at ..s.");
  }

  openLI() {
    window.alert("hahah");

  }
}