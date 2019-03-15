import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trabajadores } from '../../../../backend/models/trabajadoresModel'
import * as _ from 'lodash';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
  })

export class TrabajadoresService {

  array = [];
  private apiURL = 'http://localhost:3000/trabajadores';
  
  constructor(private httpClient: HttpClient) { }
  
  /** CRUD METHODS */

  getTrabajador(): Observable<Trabajadores[]> {
    return this.httpClient.get<Trabajadores[]>(`${this.apiURL}/lista`);
  }

  getTrabajadorById(id): Observable<Trabajadores> {
    return this.httpClient.get<Trabajadores[]>(`${this.apiURL}/${id}`);
  }

  // postTrabajador(trabajador: any): Observable<any> {
  //   return this.httpClient.post(this.apiURL, trabajador, httpOptions)
  //    .pipe(
  //      catchError(this.handleError)
  //    );
  //  }
 
  updateTrabajador(id: any, trabajador: any, ): Observable<any> {
    return this.httpClient.put(this.apiURL+"/"+id, trabajador);
  }
}
