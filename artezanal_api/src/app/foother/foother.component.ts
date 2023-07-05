import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foother',
  templateUrl: './foother.component.html',
  styleUrls: ['./foother.component.css']
})
export class FootherComponent implements OnInit {
  currentYear = new Date().getFullYear();

  constructor() {
    // You can log something here if you want
    console.log('Constructor called');
  }

  ngOnInit() {
    // Or you can log something here
    console.log('Component initialized');
  }
}
