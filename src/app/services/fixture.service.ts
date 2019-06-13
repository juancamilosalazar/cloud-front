import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { Fixture } from '../model/fixture';
import { Marcador } from '../model/marcador';
@Injectable({
  providedIn: 'root'
})
export class FixtureService {
  private endPoint:string  = "https://pilaeaplication.herokuapp.com/pilae/fixture/";
  private endPoint2:string ="https://pilaeaplication.herokuapp.com/pilae/save/fixture/";
  constructor(private http: HttpClient) { }

  listFixture(id:number) : Observable<Fixture []>{
      return this.http.get<Fixture[]>(this.endPoint.concat(id.toString()))
  }
  saveFixture(id:number) :Observable<Fixture []>{
    return this.http.get<Fixture[]>(this.endPoint2.concat(id.toString()))
  }
  jugarPartido(id:number,object:Marcador) :Observable<Marcador>{
    return this.http.post<Marcador>("https://pilaeaplication.herokuapp.com/pilae/jugar/".concat(id.toString()),object)
  }
  mostrarMarcador(id:Number) :Observable<Marcador>{
    return this.http.get<Marcador>("https://pilaeaplication.herokuapp.com/pilae/marcador/".concat(id.toString()))
  }
  
}
