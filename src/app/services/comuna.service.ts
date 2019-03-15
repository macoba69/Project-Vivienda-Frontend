import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Comuna } from '../../../../backend/models/comunaModel';
import * as _ from 'lodash';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ComunaService {

  array = [];
  public apiURL: string = 'http://localhost:3000/comuna';

  constructor(private http: HttpClient) { }

  getAllComuna(): Observable<Comuna[]> {
    return this.http.get<Comuna[]>(this.apiURL);
  }

  getComunas(codigo): Observable<Comuna[]> {
    return this.http.get<Comuna[]>(this.apiURL +`/comunasregion/${codigo}`);
  }
}
