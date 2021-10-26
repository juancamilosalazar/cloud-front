import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { tablaPosiciones } from '../model/tablaPosiciones';
import { Respuesta } from '../model/Respuesta';
@Injectable({
  providedIn: 'root'
})
export class TablaPosicionesService {
  private endPoint:string  = "http://localhost:8080/posicion";
  private headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  constructor(private http: HttpClient) { }

  listFixture(id:number) : Observable<Respuesta>{
      return this.http.get<Respuesta>(this.endPoint.concat("?idTorneo=").concat(id.toString()),{headers:this.headers})
  }
}