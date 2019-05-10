import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'customer-admin',
  templateUrl: './customer-admin.component.html'
})
export class CustomerAdmin implements OnInit {

  isInventoryMenuOpen:boolean=false;
  showFiller = false;

  constructor() { }

  ngOnInit() {
  }


}
