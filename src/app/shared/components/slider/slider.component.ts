import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  public rating: Array<any> = [
		{ dishImg: '../../../../assets/img/image_one.jpg',
      dishTitle: 'Fugiat nulla sint',
      dishPrice: '$30',
    },
		{  dishImg: '../../../../assets/img/image_two.jpg',
      dishTitle: 'Daute irure dolor',
      dishPrice: '$24',
    },
		{  dishImg: '../../../../assets/img/image_three.jpg',
      dishTitle: 'Pim minim veniam',
      dishPrice: '$17',
    },
		{ dishImg: '../../../../assets/img/image_four.jpg',
      dishTitle: 'Officia deserunt mollit',
      dishPrice: '$60',
    },
    {  dishImg: '../../../../assets/img/image_two.jpg',
      dishTitle: 'Daute irure dolor',
      dishPrice: '$24',
    },
	];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  }


  constructor() {
  }
 
  ngOnInit() {
  }

}
