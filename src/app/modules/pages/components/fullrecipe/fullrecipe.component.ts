import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MenuInterFace } from './../../../../menuinterface'
import { DataService } from './../../../../service/dataservice.service';

@Component({
  selector: 'app-fullrecipe',
  templateUrl: './fullrecipe.component.html',
  styleUrls: ['./fullrecipe.component.scss', '../mainprice/mainprice.component.scss']
})
export class FullrecipeComponent implements OnInit {
	
	menuInterface: MenuInterFace;

  constructor( private route: ActivatedRoute,
    private dataSer: DataService,
    private location: Location ) { 
  }

  ngOnInit(): void {
  	this.getDishes();
  }

  getDishes(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataSer.getDishes(id).subscribe(menuInterface => this.menuInterface = menuInterface);
  }

  goBack(): void {
    this.location.back();
  }
}
