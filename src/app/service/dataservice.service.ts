import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MenuInterFace } from '../menuinterface';
import { InMemoryDataService } from '../in-memory-data.service';
import { menu } from '../test';

/*const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};*/

@Injectable({ providedIn: 'root' })

export class DataService {

	/*private dishUrl = 'api/mainprice';*/

  constructor( /*private http: HttpClient*/ ) { }

  getMenu(): Observable<MenuInterFace[]> {
    return of(menu);
  }

	/* getDishes(): Observable<MenuInterFace[]> {
  	return this.http.get<MenuInterFace[]>(this.dishUrl);
 		.pipe(
  			tap(_ => this.log('fetched heroes')),
  			catchError(this.handleError<MenuInterFace[]>('getDishes', [])) 
  	);*/
}

