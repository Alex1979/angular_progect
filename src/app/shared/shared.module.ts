import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { OrderformComponent } from './components/orderform/orderform.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ModalComponent } from './components/modal/modal.component';
import { MenuModule } from '../modules/menu/menu.module';

@NgModule({
  declarations: [ 
  	HeaderComponent,
  	FooterComponent,
  	SliderComponent,
  	OrderformComponent
	],
  imports: [
    CommonModule,
    CarouselModule,
    MenuModule
  ],
  exports:[ 
	  HeaderComponent,
  	FooterComponent,
  	SliderComponent,
  	OrderformComponent,
    CarouselModule 
  ]
})

export class SharedModule { }
