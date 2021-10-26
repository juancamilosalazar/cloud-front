import { Injectable } from '@angular/core';
import { Torneo } from '../model/Torneo';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Equipo } from '../model/Equipo';
import { Deporte } from '../model/deporte';
import { Respuesta } from '../model/Respuesta';

@Injectable({
  providedIn: 'root'
})
export class DeporteService {
  private endPoint:string = "http://localhost:8080/deporte";
  private headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  constructor(private http: HttpClient) { }

  listAll(): Observable<Respuesta>{
    return this.http.get<Respuesta>(this.endPoint,{headers:this.headers});
  }
  createDeporte(object: Deporte): Observable<Deporte>{
    return this.http.post<Deporte>(this.endPoint,object);
  }
 
}