import { Injectable } from '@angular/core';
import { Torneo } from '../model/Torneo';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TorneoService {

  private endPoint:string  = "https://pilaeaplication.herokuapp.com/pilae/torneo";
  private endPoint2:string = 'https://pilaeaplication.herokuapp.com/pilae/torneo';
  private id:String;
  private headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  constructor(private http: HttpClient) { }

  listAll(): Observable<Torneo []>{
    return this.http.get<Torneo []>(this.endPoint,{headers:this.headers});
  }
  listAllByDeportefutbol(idDeporte:number): Observable<Torneo []>{
    return this.http.get<Torneo []>(this.endPoint.concat("?idDeporte=").concat(idDeporte.toString()),{headers:this.headers});
  }
  listAllByDeportebasquet(idDeporte:number): Observable<Torneo []>{
    return this.http.get<Torneo []>(this.endPoint.concat("?idDeporte=").concat(idDeporte.toString()),{headers:this.headers});
  }
  listAllByDeportevolei(idDeporte:number): Observable<Torneo []>{
    return this.http.get<Torneo []>(this.endPoint.concat("?idDeporte=").concat(idDeporte.toString()),{headers:this.headers});
  }
  createTorneo(object: Torneo,idDeporte:number): Observable<Torneo>{
    return this.http.post<Torneo>(this.endPoint2.concat("?idDeporte=").concat(idDeporte.toString()),object);
  }
  deleteTorneo(id: number): Observable<Torneo>{
    return this.http.delete<Torneo>(this.endPoint2.concat("?id=").concat(id.toString()));
  }
  updateTorneo(id: number,object:Torneo): Observable<Torneo>{
    return this.http.put<Torneo>(this.endPoint2.concat("?id=").concat(id.toString()),object);
  }
  
}

