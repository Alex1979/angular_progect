import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpriceComponent } from './components/mainprice/mainprice.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ReviewComponent } from './components/review/review.component';
import { FullrecipeComponent } from './components/fullrecipe/fullrecipe.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
  	MainpriceComponent, 
  	ReservationComponent, 
  	ReviewComponent,
    FullrecipeComponent
	],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
  	MainpriceComponent, 
  	ReservationComponent, 
  	ReviewComponent, 
  	FullrecipeComponent
	]
})
export class PagesModule { }
