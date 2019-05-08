import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

export interface LoginType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   // select 
   logintype: LoginType[] = [
    {value: 'w-admin', viewValue: 'Warehouse Admin'},
    {value: 'w-opt', viewValue: 'Warehouse Opt'},
    {value: 'c-admin', viewValue: 'Customer Admin'},
    {value: 'c-opt', viewValue: 'Customer Opt'}
  ];

  selected = 'w-admin';

  @Output() LoginUser = new EventEmitter<string>();

  constructor(private router: Router) { 

  }

  ngOnInit() {
  }
  loginEvent() {
    this.LoginUser.emit(this.selected);
    console.log('adsf');
  }

}
