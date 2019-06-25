import { Injectable } from '@angular/core';
import { Torneo } from '../model/Torneo';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Equipo } from '../model/Equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  private headerText = new HttpHeaders({'Content-type':'text/plain'})
  private endPoint:string = "https://pilaezuul.herokuapp.com/pilae-service/pilae/equipo";
  constructor(private http: HttpClient) { }

  listAll(): Observable<Equipo []>{
    return this.http.get<Equipo []>(this.endPoint);
  }

  createEquipo(object: Equipo,id:number): Observable<Equipo>{
    return this.http.post<Equipo>(this.endPoint.concat(id.toString()),object);
  }
  deleteEquipo(id: number): Observable<Equipo>{
    return this.http.delete<Equipo>(this.endPoint.concat(id.toString()),{headers:this.headerText});
  }
  updateEquipo(id: number,object:Equipo): Observable<Equipo>{
    return this.http.put<Equipo>(this.endPoint.concat(id.toString()),object);
  }
 

}
