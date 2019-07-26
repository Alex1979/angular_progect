import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MenuModule } from './modules/menu/menu.module';
import { PagesModule } from './modules/pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './modules/menu/menu-routing.module';
import { InMemoryDataService } from './in-memory-data.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { OrderformComponent } from './shared/components/orderform/orderform.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MenuModule,
    PagesModule,
    NgbModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    SharedModule
  ],
  providers: [
    AppRoutingModule,
    MenuModule,
    PagesModule,
    CarouselModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
