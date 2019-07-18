import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MenuInterFace } from './../../../../menuinterface'
import { DataService } from './../../../../service/dataservice.service';

@Component({
  selector: 'app-fullrecipe',
  templateUrl: './fullrecipe.component.html',
  styleUrls: ['./fullrecipe.component.scss']
})
export class FullrecipeComponent implements OnInit {
	
	@Input() dishes: MenuInterFace[];

  constructor(
    private route: ActivatedRoute,
    private dataSer: DataService,
    private location: Location
	) {}

  ngOnInit(): void {
  	this.getMenu();
  }

  getMenu(): void {
    const name = +this.route.snapshot.paramMap.get('id');
    this.dataSer.getMenu()
    .subscribe(dishes => this.dishes = dishes);
  }
}
