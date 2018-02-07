import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class VehicleService {

  constructor(private http: Http ) { }
  getVehicles(): Observable<any[]> {
    return this.http.get('http://localhost:8080/service/api/all/vehicles')
      .map(response => response.json())
      .catch(error => Observable.throw(error.statusText));
  }

  getVehicleData(): Observable<any[]> {
    return this.http.get('http://localhost:8080/service/api/all/vehicles/data')
      .map(response => response.json())
      .catch(error => Observable.throw(error.statusText));
  }

}
