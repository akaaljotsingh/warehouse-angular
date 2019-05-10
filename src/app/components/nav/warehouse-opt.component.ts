import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'warehouse-opt',
  templateUrl: './warehouse-opt.component.html'
})
export class WarehouseOpt implements OnInit {

  isInventoryMenuOpen:boolean=false;
  showFiller = false;

  constructor() { }

  ngOnInit() {
  }


}
