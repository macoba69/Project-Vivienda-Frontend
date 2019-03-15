import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { DatosFamiliares } from '../../../../backend/models/datosFamiliaresModel';
import * as _ from 'lodash';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DatosFamiliaresService {

  array = [];
  public apiURL: string = 'http://localhost:3000/datosfamiliares';

  constructor(private httpClient: HttpClient) { }

  GetDatosFamiliares(): Observable<DatosFamiliares[]> {
    return this.httpClient.get<DatosFamiliares[]>(this.apiURL);
  }
  
  getDatosFamiliaresBy(id): Observable<DatosFamiliares[]> {
    return this.httpClient.get<DatosFamiliares[]>(`${this.apiURL}/${id}`);
  }
}
