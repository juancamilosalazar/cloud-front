import { Injectable } from '@angular/core';
import { Torneo } from '../model/Torneo';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Equipo } from '../model/Equipo';
import { Deporte } from '../model/deporte';

@Injectable({
  providedIn: 'root'
})
export class DeporteService {
  private endPoint:string = "https://pilaeaplication.herokuapp.com/pilae/deporte";
  private headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  constructor(private http: HttpClient) { }

  listAll(): Observable<Deporte []>{
    return this.http.get<Deporte []>(this.endPoint,{headers:this.headers});
  }
  createDeporte(object: Deporte): Observable<Deporte>{
    return this.http.post<Deporte>(this.endPoint,object);
  }
 
}