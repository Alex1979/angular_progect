import { Component, OnInit } from '@angular/core';
import { MainpriceComponent } from '../../../modules/pages/components/mainprice/mainprice.component';
import { ReservationComponent } from '../../../modules/pages/components/reservation/reservation.component';
import { ReviewComponent } from '../../../modules/pages/components/review/review.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
