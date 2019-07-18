import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpriceComponent } from './components/mainprice/mainprice.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ReviewComponent } from './components/review/review.component';
import { FullrecipeComponent } from './components/fullrecipe/fullrecipe.component';
import { AppRoutingModule } from '../menu/menu-routing.module'

@NgModule({
  declarations: [
  	MainpriceComponent, 
  	ReservationComponent, 
  	ReviewComponent, 
  	FullrecipeComponent
	],
  imports: [
    CommonModule
  ],
  exports: [
  	MainpriceComponent, 
  	ReservationComponent, 
  	ReviewComponent, 
  	FullrecipeComponent,
    AppRoutingModule
	]
})
export class PagesModule { }
