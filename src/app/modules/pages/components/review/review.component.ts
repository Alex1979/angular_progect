import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../service/dataservice.service';
import { Review } from '../../../../review'

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss', '../../../../../assets/scss/main.scss']
})
export class ReviewComponent implements OnInit {

	public review: Review[] = [] ;

  constructor(public dataService: DataService, ) { }

  ngOnInit() {
  	this.getReviews();
  }

  getReviews(): void{
  	this.dataService.getReviews().subscribe(review => this.review = review);
  }
}
