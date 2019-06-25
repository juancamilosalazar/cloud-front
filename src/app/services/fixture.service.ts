import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { Fixture } from '../model/fixture';
import { Marcador } from '../model/marcador';
@Injectable({
  providedIn: 'root'
})
export class FixtureService {
  private endPoint:string  = "https://pilaezuul.herokuapp.com/pilae-service/pilae/fixture";
  private endPoint2:string  = "https://pilaezuul.herokuapp.com/pilae-service/pilae/marcador";
  constructor(private http: HttpClient) { }

  listFixture(id:number) : Observable<Fixture []>{
      return this.http.get<Fixture[]>(this.endPoint.concat(id.toString()))
  }
  saveFixture(id:number) :Observable<Fixture []>{
    return this.http.post<Fixture[]>(this.endPoint.concat(id.toString()),null)
  }
  jugarPartido(id:number,object:Marcador) :Observable<Marcador>{
    return this.http.put<Marcador>(this.endPoint2.concat(id.toString()),object)
  }
  mostrarMarcador(id:Number) :Observable<Marcador>{
    return this.http.get<Marcador>(this.endPoint2.concat(id.toString()))
  }
  
}
