import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders} from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { Fixture } from '../model/fixture';
import { Marcador } from '../model/marcador';
@Injectable({
  providedIn: 'root'
})
export class FixtureService {
  private endPoint:string  = "https://pilaezuul.herokuapp.com/pilae-service/pilae/fixture";
  private endPoint2:string  = "https://pilaezuul.herokuapp.com/pilae-service/pilae/marcador";
  private headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  constructor(private http: HttpClient) { }

  listFixture(id:number) : Observable<Fixture []>{
      return this.http.get<Fixture[]>(this.endPoint.concat("?id=").concat(id.toString()),{headers:this.headers})
  }
  saveFixture(id:number) :Observable<Fixture []>{
    return this.http.post<Fixture[]>(this.endPoint.concat("?id=").concat(id.toString()),null)
  }
  jugarPartido(id:number,object:Marcador) :Observable<Marcador>{
    return this.http.put<Marcador>(this.endPoint2.concat("?id=").concat(id.toString()),object)
  }
  mostrarMarcador(id:Number) :Observable<Marcador>{
    return this.http.get<Marcador>(this.endPoint2.concat("?id=").concat(id.toString()),{headers:this.headers})
  }
  
}
