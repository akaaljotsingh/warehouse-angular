import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

var login;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { 

   
  }

  ngOnInit() {
  }
  onLoginClick() {
    login = true;
  }

}
