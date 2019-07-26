import { Component, OnInit,  Input } from '@angular/core';

@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.scss', '../../../../assets/scss/main.scss']
})
export class OrderformComponent implements OnInit {

	@Input() childMessage;
	constructor() { }

  	ngOnInit() {
  	}
}
