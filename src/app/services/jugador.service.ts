import { Injectable } from '@angular/core';
import { Torneo } from '../model/Torneo';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Equipo } from '../model/Equipo';
import { Jugador } from '../model/Jugador';
import { Respuesta } from '../model/Respuesta';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  private headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  private endPoint:string  = "http://localhost:8080/jugador";
  constructor(private http: HttpClient) { }

  listJugador(id:number): Observable<Respuesta>{
    return this.http.get<Respuesta>(this.endPoint.concat("?idEquipo=").concat(id.toString()),{headers:this.headers});
  }
  updateJugador(id: number,object:Jugador): Observable<Jugador>{
    return this.http.put<Jugador>(this.endPoint.concat("?id=").concat(id.toString()),object);
  }
  deleteJugador(id: number): Observable<Jugador>{
    return this.http.delete<Jugador>(this.endPoint.concat("?id=").concat(id.toString()),{headers:this.headers});
  }
  createJugador(id: number, jugador:Jugador):Observable<Jugador>{
    return this.http.post<Jugador>(this.endPoint.concat("?equipoId=").concat(id.toString()),jugador)
  }
 

}
