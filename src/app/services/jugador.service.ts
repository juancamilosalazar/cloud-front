import { Injectable } from '@angular/core';
import { Torneo } from '../model/Torneo';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Equipo } from '../model/Equipo';
import { Jugador } from '../model/Jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  private headerText = new HttpHeaders({'Content-type':'text/plain'})
  private endPoint:string  = "https://pilaezuul.herokuapp.com/pilae-service/pilae/jugadores/";
  constructor(private http: HttpClient) { }

  listJugador(id:number): Observable<Jugador []>{
    return this.http.get<Jugador[]>(this.endPoint.concat(id.toString()));
  }
  updateJugador(id: number,object:Jugador): Observable<Jugador>{
    return this.http.put<Jugador>('https://pilaezuul.herokuapp.com/pilae-service/pilae/update/jugador/'.concat(id.toString()),object);
  }
  deleteJugador(id: number): Observable<Jugador>{
    return this.http.delete<Jugador>('https://pilaezuul.herokuapp.com/pilae-service/pilae/delete/jugador/'.concat(id.toString()),{headers:this.headerText});
  }
  createJugador(id: number, jugador:Jugador):Observable<Jugador>{
    return this.http.post<Jugador>("https://pilaezuul.herokuapp.com/pilae-service/pilae/insertar/jugador/".concat(id.toString()),jugador)
  }
 

}
