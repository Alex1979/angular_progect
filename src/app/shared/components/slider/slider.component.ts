import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TopDishes } from '../../../topdishes';
import { DataService } from '../../../service/dataservice.service';
import { ModalService } from '../../../service/modal.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit {
  bodyText: string; 

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: { items: 1
      },
      576: { items: 2
      },
      768: { items: 3
      },
      992: { items: 4
      }
    }
  }

  public top: TopDishes[] = [];

  constructor(  public dataService: DataService,
                public modalService: ModalService ) {
  }
 
  ngOnInit() {
    this.topDishes();
    this.bodyText = 'This text can be updated in modal 1';
  }

  topDishes():void {
    this.dataService.topDishes().subscribe(top => this.top = top);
  }
/*  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }*/

}
