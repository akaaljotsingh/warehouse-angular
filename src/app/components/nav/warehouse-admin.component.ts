import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'warehouse-admin',
  templateUrl: './warehouse-admin.component.html'
})
export class WarehouseAdmin implements OnInit {

  flag = true;

  clickMe() {
    this.flag = false;
  }

  constructor() { }

  ngOnInit() {
  }


}
