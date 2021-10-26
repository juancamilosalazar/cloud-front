import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { Fixture } from '../model/fixture';
import { Marcador } from '../model/marcador';
import { Respuesta } from '../model/Respuesta';
@Injectable({
  providedIn: 'root'
})
export class FixtureService {
  private endPoint: string =  "http://localhost:8080/partido";
  private endPoint2: string = "http://localhost:8080/marcador";
  private headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  constructor(private http: HttpClient) { }

  listFixture(id: number): Observable<Respuesta> {
    return this.http.get<Respuesta>(this.endPoint.concat("?idTorneo=").concat(id.toString()), { headers: this.headers })
  }
  saveFixture(id: number): Observable<Fixture[]> {
    return this.http.get<Fixture[]>(this.endPoint.concat("?idTorneoIdaVuelta=").concat(id.toString()))
  }
  saveFixtureNotReturn(id: number): Observable<Fixture[]> {
    return this.http.get<Fixture[]>(this.endPoint.concat("?idTorneoSoloIda=").concat(id.toString()))
  }
  jugarPartido(id: number, object: Marcador): Observable<Marcador> {
    return this.http.put<Marcador>(this.endPoint.concat("?id=").concat(id.toString()), object)
  }
  mostrarMarcador(id: Number): Observable<Respuesta> {
    return this.http.get<Respuesta>(this.endPoint2.concat("?idPartido=").concat(id.toString()), { headers: this.headers })
  }
  mostrarMarcadoresTorneo(id: Number): Observable<Respuesta> {
    return this.http.get<Respuesta>(this.endPoint2.concat("?idTorneo=").concat(id.toString()), { headers: this.headers })
  }
  createPartido(object: Fixture,id: Number,idLocal:Number,idVisitante:Number): Observable<Fixture>{
    return this.http.post<Fixture>(this.endPoint.concat("?idTorneo=").concat(id.toString()).concat("&idLocal=").concat(idLocal.toString()).concat("&idVisitante=").concat(idVisitante.toString()),object,{ headers: this.headers });
  }
  updatePartido(object:Fixture,id:Number):Observable<Fixture>{
    return this.http.put<Fixture>(this.endPoint.concat("?id=").concat(id.toString()),object,{ headers: this.headers });
  }

}
