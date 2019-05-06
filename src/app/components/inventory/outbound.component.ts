import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

export interface People {
  value: string;
  viewValue: string;
}


export interface Table {
  order: number;
  company: string;
  status: string;
  invoiced: string;
  packed: string;
  fulfilled: string;
  paid: string;
  returning: string;
  total: string;
  created: string;
}

const ELEMENT_DATA: Table[] = [
  {order: 43231 ,company: 'Acme Supplies (DEMO)', status: 'active', invoiced: 'active', packed: 'inactive', fulfilled: 'active', paid: 'active', returning: 'inactive', total:'$4000', created: '10/12/19'},
  {order: 43231 ,company: 'Acme Supplies (DEMO)', status: 'inactive', invoiced: 'active', packed: 'active', fulfilled: 'active', paid: 'active', returning: 'active', total:'$4000', created: '10/12/19'},
  {order: 43231 ,company: 'Acme Supplies (DEMO)', status: 'active', invoiced: 'active', packed: 'active', fulfilled: 'inactive', paid: 'active', returning: 'active', total:'$4000', created: '10/12/19'},
  {order: 43231 ,company: 'Acme Supplies (DEMO)', status: 'active', invoiced: 'inactive', packed: 'inactive', fulfilled: 'active', paid: 'inactive', returning: 'active', total:'$4000', created: '10/12/19'},
  {order: 43231 ,company: 'Acme Supplies (DEMO)', status: 'inactive', invoiced: 'active', packed: 'active', fulfilled: 'active', paid: 'active', returning: 'active', total:'$4000', created: '10/12/19'},
  {order: 43231 ,company: 'Acme Supplies (DEMO)', status: 'active', invoiced: 'active', packed: 'inactive', fulfilled: 'inactive', paid: 'active', returning: 'inactive', total:'$4000', created: '10/12/19'},
  {order: 43231 ,company: 'Acme Supplies (DEMO)', status: 'inactive', invoiced: 'inactive', packed: 'inactive', fulfilled: 'active', paid: 'active', returning: 'active', total:'$4000', created: '10/12/19'},
  {order: 43231 ,company: 'Acme Supplies (DEMO)', status: 'active', invoiced: 'active', packed: 'active', fulfilled: 'inactive', paid: 'active', returning: 'active', total:'$4000', created: '10/12/19'},
  {order: 43231 ,company: 'Acme Supplies (DEMO)', status: 'inactive', invoiced: 'active', packed: 'inactive', fulfilled: 'inactive', paid: 'active', returning: 'inactive', total:'$4000', created: '10/12/19'},
  {order: 43231 ,company: 'Acme Supplies (DEMO)', status: 'active', invoiced: 'active', packed: 'inactive', fulfilled: 'active', paid: 'active', returning: 'active', total:'$4000', created: '10/12/19'},
  {order: 43231 ,company: 'Acme Supplies (DEMO)', status: 'active', invoiced: 'inactive', packed: 'inactive', fulfilled: 'active', paid: 'active', returning: 'inactive', total:'$4000', created: '10/12/19'},
];

@Component({
  selector: 'app-outbound',
  templateUrl: './outbound.component.html'
})
export class OutboundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild(MatSort) sort: MatSort;

  // Table
  displayedColumns: string[] = [ 'order', 'company', 'status', 'invoiced', 'packed', 'fulfilled', 'paid', 'returning', 'total', 'created'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  
  // select 
  people: People[] = [
    {value: 'import', viewValue: 'Import Locations'},
    {value: 'export', viewValue: 'Export Locations'},
    {value: 'edit-relationship', viewValue: 'Edit Relationships'}
  ];

}
