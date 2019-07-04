import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { tablaPosiciones } from '../model/tablaPosiciones';
@Injectable({
  providedIn: 'root'
})
export class TablaPosicionesService {
  private endPoint:string  = "https://pilaeaplication.herokuapp.com/pilae/posicion";
  private headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  constructor(private http: HttpClient) { }

  listFixture(id:number) : Observable<tablaPosiciones []>{
      return this.http.get<tablaPosiciones[]>(this.endPoint.concat("?id=").concat(id.toString()),{headers:this.headers})
  }
}