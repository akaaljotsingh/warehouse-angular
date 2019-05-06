import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

export interface People {
  value: string;
  viewValue: string;
}


export interface Table {
  company: string;
  item: string;
  quantity: number;
  sku: string;
  room: string;
}

const ELEMENT_DATA: Table[] = [
  {company: 'Acme Supplies' ,item: ' BMW', quantity: 200, sku: '3A', room: '44B'},
  {company: 'Acme Supplies' ,item: ' BMW', quantity: 200, sku: '3A', room: '44B'},
  {company: 'Acme Supplies' ,item: ' BMW', quantity: 200, sku: '3A', room: '44B'},
  {company: 'Acme Supplies' ,item: ' BMW', quantity: 200, sku: '3A', room: '44B'},
  {company: 'Acme Supplies' ,item: ' BMW', quantity: 200, sku: '3A', room: '44B'},
  {company: 'Acme Supplies' ,item: ' BMW', quantity: 200, sku: '3A', room: '44B'},
  {company: 'Acme Supplies' ,item: ' BMW', quantity: 200, sku: '3A', room: '44B'},
  {company: 'Acme Supplies' ,item: ' BMW', quantity: 200, sku: '3A', room: '44B'},
  ];

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html'
})
export class StockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild(MatSort) sort: MatSort;

  // Table
  displayedColumns: string[] = [ 'company', 'item', 'quantity', 'sku', 'room' ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  
  // select 
  people: People[] = [
    {value: 'import', viewValue: 'Import Locations'},
    {value: 'export', viewValue: 'Export Locations'},
    {value: 'edit-relationship', viewValue: 'Edit Relationships'}
  ];

}