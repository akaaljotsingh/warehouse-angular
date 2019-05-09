import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
  isSidebarHidden:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar()		
  {		
    		
    var bodyElem=document.getElementById("app-container");		
    if(this.isSidebarHidden==true)		
    {		
      bodyElem.classList.remove("main-hidden");		
      bodyElem.classList.remove("sub-hidden");		
      this.isSidebarHidden=false;		
      		
    }		
    else		
    {		
        bodyElem.classList.add("main-hidden");		
        bodyElem.classList.add("sub-hidden");		
        this.isSidebarHidden=true;		
    }		
    		
  }


}
