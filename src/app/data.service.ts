import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getTourist(): Observable<any> {
    return this.http.get('http://localhost:8080/api/tourists');
  }

  getFlights(): Observable<any> {
    return this.http.get('http://localhost:8080/api/flights');
  }

  getListOfTouristToFlight(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/api/touristsListOfFlights/flight_id/' + id);
  }

}
