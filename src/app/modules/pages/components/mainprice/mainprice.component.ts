import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FullrecipeComponent } from '../fullrecipe/fullrecipe.component';
import { MenuInterFace } from '../../../../menuinterface';
import { DataService } from '../../../../service/dataservice.service';
import { MenuComponent } from '../../../menu/components/menu/menu.component';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-mainprice',
  templateUrl: './mainprice.component.html',
  styleUrls: ['./mainprice.component.scss']
})

export class MainpriceComponent implements OnInit {

	public dish: MenuInterFace[] = [];
  public id: number;

  constructor( 
    public dataService: DataService, 
    public route: ActivatedRoute, ) {
  }

  ngOnInit() {
  	this.getMenu();
  }

  getMenu(): void{
    this.dataService.getMenu().subscribe( dish => this.dish = dish );
  }
}
