import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { Fixture } from '../model/fixture';
import { Marcador } from '../model/marcador';
@Injectable({
  providedIn: 'root'
})
export class FixtureService {
  private endPoint:string  = "http://localhost:8181/pilae/fixture/";
  private endPoint2:string ="http://localhost:8181/pilae/save/fixture/";
  constructor(private http: HttpClient) { }

  listFixture(id:number) : Observable<Fixture []>{
      return this.http.get<Fixture[]>(this.endPoint.concat(id.toString()))
  }
  saveFixture(id:number) :Observable<Fixture []>{
    return this.http.get<Fixture[]>(this.endPoint2.concat(id.toString()))
  }
  jugarPartido(id:number,object:Marcador) :Observable<Marcador>{
    return this.http.post<Marcador>("http://localhost:9093/pilae/jugar/".concat(id.toString()),object)
  }
  mostrarMarcador(id:Number) :Observable<Marcador>{
    return this.http.get<Marcador>("http://localhost:8181/pilae/marcador/".concat(id.toString()))
  }
  
}
