import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

export interface Table {
  name: string;
  type: string;
  email: string;
  phone: number;
  address: string;
  status: string;
  created: string;
}

const ELEMENT_DATA: Table[] = [
  {name: 'Acme Supplies (DEMO)', type: 'Supplier', email: 'test@test.com', phone: 9888159592, address: '404, dark page, Black hole', status: 'active', created: '10/12/19'},
  {name: 'Acme Supplies (DEMO)', type: 'Supplier', email: 'test@test.com', phone: 9888159592, address: '404, dark page, Black hole', status: 'active', created: '10/12/19'},
  {name: 'Acme Supplies (DEMO)', type: 'Supplier', email: 'test@test.com', phone: 9888159592, address: '404, dark page, Black hole', status: 'active', created: '10/12/19'},
  {name: 'Acme Supplies (DEMO)', type: 'Supplier', email: 'test@test.com', phone: 9888159592, address: '404, dark page, Black hole', status: 'active', created: '10/12/19'},
  {name: 'Acme Supplies (DEMO)', type: 'Supplier', email: 'test@test.com', phone: 9888159592, address: '404, dark page, Black hole', status: 'active', created: '10/12/19'},
  {name: 'Acme Supplies (DEMO)', type: 'Supplier', email: 'test@test.com', phone: 9888159592, address: '404, dark page, Black hole', status: 'active', created: '10/12/19'},
  {name: 'Acme Supplies (DEMO)', type: 'Supplier', email: 'test@test.com', phone: 9888159592, address: '404, dark page, Black hole', status: 'active', created: '10/12/19'},
  {name: 'Acme Supplies (DEMO)', type: 'Supplier', email: 'test@test.com', phone: 9888159592, address: '404, dark page, Black hole', status: 'active', created: '10/12/19'},
  {name: 'Acme Supplies (DEMO)', type: 'Supplier', email: 'test@test.com', phone: 9888159592, address: '404, dark page, Black hole', status: 'active', created: '10/12/19'},
  {name: 'Acme Supplies (DEMO)', type: 'Supplier', email: 'test@test.com', phone: 9888159592, address: '404, dark page, Black hole', status: 'active', created: '10/12/19'},
  {name: 'Acme Supplies (DEMO)', type: 'Supplier', email: 'test@test.com', phone: 9888159592, address: '404, dark page, Black hole', status: 'active', created: '10/12/19'}
];

@Component({
  selector: 'app-relationship',
  templateUrl: './create-relationship.component.html'
})
export class CreateRelationshipComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['name', 'type', 'email', 'phone', 'address', 'status', 'created'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
  }

}
