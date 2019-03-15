import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { EmpresaLaboral } from '../../../../backend/models/empresaLaboralModel';
import * as _ from 'lodash';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EmpresaLaboralService {

  array = [];
  public apiURL: string = 'http://localhost:3000/empresalaboral';

  constructor(private httpClient: HttpClient) { }

  /** CRUD METHODS */

  getEmpresaLaboral(): Observable<EmpresaLaboral[]> {
    return this.httpClient.get<EmpresaLaboral[]>(this.apiURL);
  }

  getEmpresaLaboralBy(id): Observable<EmpresaLaboral[]> {
    return this.httpClient.get<EmpresaLaboral[]>(`${this.apiURL}/${id}`);
  }
}
