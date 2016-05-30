import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-product',
  template: `
    <p>
      product Works!
    </p>
  `
})
export class ProductComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
