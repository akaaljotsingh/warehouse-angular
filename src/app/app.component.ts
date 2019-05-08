import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Warehouse';
  selected: any;
  loggedIn:boolean=false;
  receiveMessage(event) {
    this.selected = event;
    this.loggedIn=true;
  }
}
