import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  activetab: string = 'wastage';

  constructor() { }

  getActiveTab(tabname: string) {
    this.activetab = tabname;
  }

  ngOnInit() {
  }

}
