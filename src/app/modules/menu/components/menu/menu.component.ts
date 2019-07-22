import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

	logopath = "../assets/img/header_logo.png";
	status: boolean = false;

  constructor() { }

  clickEvent(){
    this.status = !this.status;
	}

  ngOnInit() {
  }
}
