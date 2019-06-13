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
  private endPoint:string  = "http://localhost:8181/pilae/listar/equipos";
  constructor(private http: HttpClient) { }

  listAll(): Observable<Equipo []>{
    return this.http.get<Equipo []>(this.endPoint);
  }

  createEquipo(object: Equipo,id:number): Observable<Equipo>{
    return this.http.post<Equipo>('http://localhost:8181/pilae/insertar/equipo/'.concat(id.toString()),object);
  }
  deleteEquipo(id: number): Observable<Equipo>{
    return this.http.delete<Equipo>('http://localhost:8181/pilae/delete/equipo/'.concat(id.toString()),{headers:this.headerText});
  }
  updateEquipo(id: number,object:Equipo): Observable<Equipo>{
    return this.http.put<Equipo>('http://localhost:8181/pilae/update/equipo/'.concat(id.toString()),object);
  }
 

}
