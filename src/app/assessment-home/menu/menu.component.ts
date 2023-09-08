import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Closes the collapsible menu in smaller resolutions
  closeMenu(){
    document.getElementById("collapsibleNavbar").style.width = "0";
  }

}
