import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { DatosAhorro } from '../../../../backend/models/datosAhorroModel';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DatosAhorroService {
  
  array = [];
  public apiURL: string = 'http://localhost:3000/datosahorro';

  constructor(private httpClient: HttpClient) { }

  GetDatosAhorro(): Observable<DatosAhorro[]> {
    return this.httpClient.get<DatosAhorro[]>(this.apiURL);
  }

  // getDatosAhorroBy(id): Observable<DatosAhorro[]> {
  //   return this.httpClient.get<DatosAhorro[]>(`${this.apiURL}/${id}`);
  // }

}
