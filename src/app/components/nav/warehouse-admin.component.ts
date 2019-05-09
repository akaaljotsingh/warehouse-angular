import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'warehouse-admin',
  templateUrl: './warehouse-admin.component.html'
})
export class WarehouseAdmin implements OnInit {

  isInventoryMenuOpen:boolean=false;

  constructor() { }

  ngOnInit() { 
  }

  showFiller = false;


}
