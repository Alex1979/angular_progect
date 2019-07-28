import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MenuInterFace } from './../../../../menuinterface'
import { DataService } from './../../../../service/dataservice.service';
import { OrderformComponent } from '../../../../shared/components/orderform/orderform.component';

@Component({
  selector: 'app-fullrecipe',
  templateUrl: './fullrecipe.component.html',
  styleUrls: ['./fullrecipe.component.scss', '../../../../../assets/scss/main.scss']
})

export class FullrecipeComponent implements OnInit {
	
	public menuInterface: MenuInterFace;
  public showMenBlock;

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
