import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'customer-opt',
  templateUrl: './customer-opt.component.html'
})
export class CustomerOpt implements OnInit {

  isInventoryMenuOpen:boolean=false;
  showFiller = false;

  constructor() { }

  ngOnInit() {
  }


}
