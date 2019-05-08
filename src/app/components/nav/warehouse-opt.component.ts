import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'warehouse-opt',
  templateUrl: './warehouse-opt.component.html'
})
export class WarehouseOpt implements OnInit {

  flag = true;

  clickMe() {
    this.flag = false;
  }

  constructor() { }

  ngOnInit() {
  }


}
