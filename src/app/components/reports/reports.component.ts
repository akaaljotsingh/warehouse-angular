import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

export interface INVENTORYREPORT {
  product: string;
  varient: string;
  sku: string;
  totalstock: number;
  supplier: string;
  purchase: string;
  stock: string;
  incomingstock: string;
}


export interface ORDERREPORT {
  customername: string;
  customertype: string;
  productname: string;
  productbrand: string;
  producttype: string;
  shippingcountry: string;
  supplier: string;
  varrientname: string;
  totalsale: number;
}



export interface Inventory {
  value: string;
  viewValue: string;
}


export interface Table {
  sno: number;
  type: string;
  order: string;
}

const ELEMENT_DATA: Table[] = [
  {sno: 1, type: 'Small - Diamond Ring ', order: '$3455'},
  {sno: 2, type: 'Red / Medium - Sweatshirt  ', order: '$6700'},
  {sno: 3, type: 'White / Medium - Cotton ', order: '$9700'},
];

const InReport: INVENTORYREPORT[] = [
  {product: 'Acme Supplies (DEMO)', varient: 'Supplier', sku: 'test@test.com',  supplier: '404, dark page, Black hole', purchase: 'active', stock: '10/12/19', incomingstock: '10/12/19', totalstock: 2000},
];

const OrderReport: ORDERREPORT[] = [
  {customername: 'John Doe', customertype: 'Supplier', productname: 'Hummer',  productbrand: 'BMW', producttype: 'Car', shippingcountry: 'America', supplier: 'Jim Carry', varrientname:'Golden', totalsale: 2000},
];

@Component({
  selector: 'app-inventory-report',
  templateUrl: './reports.component.html'
})
export class ReportsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // select 
  inventory: Inventory[] = [
    {value: 'la', viewValue: 'Incoming Stock Report'},
    {value: 'la', viewValue: 'Inventory Details'},
    {value: 'la', viewValue: 'Inventory Stock on Hand'},
    {value: 'la', viewValue: 'Compare your stock levels in multiple locations'},
    {value: 'la', viewValue: 'Product and variant in the inventory that are low in stock'},
    {value: 'la', viewValue: 'Stock Movement Export'},
  ];

  displayedColumns: string[] = [ 'sno', 'type', 'order'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  displayedColumns1: string[] = [ 'product', 'varient', 'sku',  'supplier', 'purchase', 'stock', 'incomingstock', 'totalstock'];
  dataSource1 = new MatTableDataSource(InReport);

  displayedColumns2: string[] = [ 'customername', 'customertype', 'productname', 'productbrand', 'producttype', 'shippingcountry', 'supplier', 'varrientname', 'totalsale', ];
  dataSource2 = new MatTableDataSource(OrderReport);

  

}
