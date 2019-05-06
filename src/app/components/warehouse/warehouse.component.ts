import { Component, OnInit, ViewChild } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import {MatSort, MatTableDataSource} from '@angular/material';

export interface People {
  value: string;
  viewValue: string;
}


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
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html'
})
export class WarehouseComponent implements OnInit {

  // select 
  people: People[] = [
    {value: 'import', viewValue: 'Import Locations'},
    {value: 'export', viewValue: 'Export Locations'},
    {value: 'edit-relationship', viewValue: 'Edit Relationships'}
  ];

  // table

  displayedColumns: string[] = ['name', 'type', 'email', 'phone', 'address', 'status', 'created'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
