import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { tablaPosiciones } from '../model/tablaPosiciones';
@Injectable({
  providedIn: 'root'
})
export class TablaPosicionesService {
  private endPoint:string  = "https://pilaezuul.herokuapp.com/pilae-service/pilae/posicion";
  constructor(private http: HttpClient) { }

  listFixture(id:number) : Observable<tablaPosiciones []>{
      return this.http.get<tablaPosiciones[]>(this.endPoint.concat(id.toString()))
  }
}