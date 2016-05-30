import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  template: `
    <p>
      home works!
    </p>
  `
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
