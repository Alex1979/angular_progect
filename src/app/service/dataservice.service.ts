import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MenuInterFace } from '../menuinterface';
import { InMemoryDataService } from '../in-memory-data.service';
import { MENU } from '../test';

/*const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};*/

@Injectable({ providedIn: 'root' })

export class DataService {

	/*private dishUrl = 'api/mainprice';*/

  constructor( /*private http: HttpClient*/ ) { }

  getMenu(): Observable<MenuInterFace[]> {
    return of(MENU);
  }

	getDishes(id:number): Observable<MenuInterFace> {
    return of(MENU.find(dishes => dishes.id === id));
  }
}
