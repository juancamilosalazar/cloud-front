import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { Fixture } from '../model/fixture';
import { Marcador } from '../model/marcador';
@Injectable({
  providedIn: 'root'
})
export class FixtureService {
  private endPoint: string = "https://pilaeaplication.herokuapp.com/pilae/fixture";
  private endPoint2: string = "https://pilaeaplication.herokuapp.com/pilae/marcador";
  private headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  constructor(private http: HttpClient) { }

  listFixture(id: number): Observable<Fixture[]> {
    return this.http.get<Fixture[]>(this.endPoint.concat("?id=").concat(id.toString()), { headers: this.headers })
  }
  saveFixture(id: number): Observable<Fixture[]> {
    return this.http.get<Fixture[]>(this.endPoint.concat("?idTorneo=").concat(id.toString()))
  }
  jugarPartido(id: number, object: Marcador): Observable<Marcador> {
    return this.http.put<Marcador>(this.endPoint2.concat("?id=").concat(id.toString()), object)
  }
  mostrarMarcador(id: Number): Observable<Marcador> {
    return this.http.get<Marcador>(this.endPoint2.concat("?id=").concat(id.toString()), { headers: this.headers })
  }
  mostrarMarcadoresTorneo(id: Number): Observable<Marcador[]> {
    return this.http.get<Marcador[]>(this.endPoint2.concat("?idTorneo=").concat(id.toString()), { headers: this.headers })
  }

}
