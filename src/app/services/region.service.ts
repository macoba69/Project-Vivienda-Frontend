import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Region } from '../../../../backend/models/regionModel';
import * as _ from 'lodash';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  array = [];
  public apiURL: string = 'http://localhost:3000/region';

  constructor(private httpClient: HttpClient) { }

  /** CRUD METHODS */

  getRegion(): Observable<Region[]> {
    return this.httpClient.get<Region[]>(this.apiURL);
  }
}
