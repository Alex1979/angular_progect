import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { FullrecipeComponent } from '../fullrecipe/fullrecipe.component';
import { MenuInterFace } from '../../../../menuinterface';
import { DataService } from '../../../../service/dataservice.service';

@Component({
  selector: 'app-mainprice',
  templateUrl: './mainprice.component.html',
  styleUrls: ['./mainprice.component.scss']
})

export class MainpriceComponent implements OnInit {

	dish: MenuInterFace[] = [];

  constructor( private dataService: DataService, private route: ActivatedRoute) {}

  ngOnInit() {
  	this.getMenu();
  }

  getMenu(): void {
    const dishdetail = +this.route.snapshot.paramMap.get('id');
    console.log(dishdetail);
    this.dataService.getMenu()
    .subscribe(dishes => this.dish = dishes);
    this.dataService.getMenu().subscribe( dish => this.dish = dish );
  }
}
