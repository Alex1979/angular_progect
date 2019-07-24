import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MenuInterFace } from '../menuinterface';



@Injectable({ providedIn: 'root' })

export class DataService {

	private dishUrl = 'api/mainprice';

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
}
