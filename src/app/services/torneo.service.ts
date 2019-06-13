import { Injectable } from '@angular/core';
import { Torneo } from '../model/Torneo';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TorneoService {

  private endPoint:string  = "http://localhost:8181/pilae/listar/torneos";
  private id:String;
  private headerText = new HttpHeaders({'Content-type':'text/plain'})
  constructor(private http: HttpClient) { }

  listAll(): Observable<Torneo []>{
  
    return this.http.get<Torneo []>(this.endPoint);
  }
  createTorneo(object: Torneo): Observable<Torneo>{
    return this.http.post<Torneo>('http://localhost:8181/pilae/insertar/torneo',object);
  }
  deleteTorneo(id: number): Observable<Torneo>{
    return this.http.delete<Torneo>('http://localhost:8181/pilae/delete/torneo/'.concat(id.toString()),{headers:this.headerText});
  }
  updateTorneo(id: number,object:Torneo): Observable<Torneo>{
    return this.http.put<Torneo>('http://localhost:8181/pilae/update/torneo/'.concat(id.toString()),object);
  }
  
}

