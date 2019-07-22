import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuModule } from './modules/menu/menu.module';
import { PagesModule } from './modules/pages/pages.module';
import { SliderComponent } from './shared/components/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './modules/menu/menu-routing.module';
import { InMemoryDataService } from './in-memory-data.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    MenuModule,
    PagesModule,
    NgbModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    AngularFontAwesomeModule
/*    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ) */
  ],
  providers: [
    AppRoutingModule,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuModule,
    PagesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
