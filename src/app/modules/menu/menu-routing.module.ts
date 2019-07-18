import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainpriceComponent } from '../pages/components/mainprice/mainprice.component';
import { ReservationComponent } from '../pages/components/reservation/reservation.component';
import { ReviewComponent } from '../pages/components/review/review.component';
import { FullrecipeComponent } from '../pages/components/fullrecipe/fullrecipe.component';

const routes: Routes = [
  { path: '', redirectTo: '/mainprice', pathMatch: 'full' },
  { path: 'mainprice', component: MainpriceComponent },
  {	path: 'fullrecipe/:id', component: FullrecipeComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'review', component: ReviewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}