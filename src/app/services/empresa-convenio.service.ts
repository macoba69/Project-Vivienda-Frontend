import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpresaConvenio } from '../../../../backend/models/empresaConvenioModel';
import * as _ from 'lodash';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class EmpresaConvenioService {

  array = [];
  public apiURL: string = 'http://localhost:3000/empresaconvenio';

  constructor(private httpClient: HttpClient) { }

/** CRUD METHODS */
  
  getEmpresaConvenio(): Observable<EmpresaConvenio[]> {
    return this.httpClient.get<EmpresaConvenio[]>(this.apiURL);
  }

  getEmpresaConvenioBy(id): Observable<EmpresaConvenio[]> {
    return this.httpClient.get<EmpresaConvenio[]>(`${this.apiURL}/${id}`);
  }    
}
