import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { AppRoutingModule } from './menu-routing.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[MenuComponent, AppRoutingModule]
})
export class MenuModule { }
