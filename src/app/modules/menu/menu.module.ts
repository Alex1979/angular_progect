import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './menu-routing.module'
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
  	AppRoutingModule,
  	MenuComponent
	]
})
export class MenuModule { }
