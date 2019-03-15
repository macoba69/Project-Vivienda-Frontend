import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
//import { Usuario } from '../../../../backend/models/trabajadoresModel';
import * as _ from 'lodash';
import { Usuario } from '../components/interface/usuario';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  array = [];
  public apiURL: string = 'http://localhost:3000/usuario';
  
  constructor(private httpClient: HttpClient) { }

  /** CRUD METHODS */

  getUsuario(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.apiURL);
  }

  getUsuarioById(id): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(`${this.apiURL}/${id}`);
  }
}
