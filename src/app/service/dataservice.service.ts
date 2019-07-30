import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { MenuInterFace } from '../menuinterface';
import { TopDishes } from '../topdishes';
import { Review } from '../review';


@Injectable({ providedIn: 'root' })

export class DataService {

	private dishUrl = '/api/mainprice';
  private topDishUrl = '/api/topdishes';
  private reviewUrl = '/api/review';


	httpOptions = {
 		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

  constructor( private http: HttpClient ) { }

  getMenu(): Observable<MenuInterFace[]> {
    return this.http.get<MenuInterFace[]>(this.dishUrl);
  }

	getDishes(id:number): Observable<MenuInterFace> {
		const url =`${this.dishUrl}/${id}`;
    return this.http.get<MenuInterFace>(url);
  }

  topDishes(): Observable<TopDishes[]>{
    return this.http.get<TopDishes[]>(this.topDishUrl);
  }
/* 
  topdish(){
    
  }
*/
/*
  getReview(){
   
  }
  */
  getReviews(): Observable<Review[]>{
     return this.http.get<Review[]>(this.reviewUrl);
  }
}
