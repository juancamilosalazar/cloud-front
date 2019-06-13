import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { tablaPosiciones } from '../model/tablaPosiciones';
@Injectable({
  providedIn: 'root'
})
export class TablaPosicionesService {
  private endPoint:string  = "http://localhost:8181/pilae/listar/posiciones/";
  constructor(private http: HttpClient) { }

  listFixture(id:number) : Observable<tablaPosiciones []>{
      return this.http.get<tablaPosiciones[]>(this.endPoint.concat(id.toString()))
  }
}