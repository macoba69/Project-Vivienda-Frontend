import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { DatosDiagnostico } from '../../../../backend/models/datosDiagnosticoModel';
import * as _ from 'lodash';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DatosDiagnosticoService {

  array = [];
  public apiURL: string = 'http://localhost:3000/datosdiagnostico';

  constructor(private httpClient: HttpClient) { }

  GetDatosDiagnostico(): Observable<DatosDiagnostico[]> {
    return this.httpClient.get<DatosDiagnostico[]>(this.apiURL);
  }

  getDatosDiagnosticoBy(id): Observable<DatosDiagnostico[]> {
    return this.httpClient.get<DatosDiagnostico[]>(`${this.apiURL}/${id}`);
  }
}
