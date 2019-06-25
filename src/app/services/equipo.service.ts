import { Injectable } from '@angular/core';
import { Torneo } from '../model/Torneo';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Equipo } from '../model/Equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  private endPoint:string = "https://pilaezuul.herokuapp.com/pilae-service/pilae/equipo";
  private headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  constructor(private http: HttpClient) { }

  listAll(): Observable<Equipo []>{
    return this.http.get<Equipo []>(this.endPoint,{headers:this.headers});
  }

  createEquipo(object: Equipo,id:number): Observable<Equipo>{
    return this.http.post<Equipo>(this.endPoint.concat("?torneoId=").concat(id.toString()),object);
  }
  deleteEquipo(id: number): Observable<Equipo>{
    return this.http.delete<Equipo>(this.endPoint.concat("?id=").concat(id.toString()),{headers:this.headers});
  }
  updateEquipo(id: number,object:Equipo): Observable<Equipo>{
    return this.http.put<Equipo>(this.endPoint.concat("?id=").concat(id.toString()),object);
  }
 

}
