import { Injectable } from '@angular/core';
import { Torneo } from '../model/Torneo';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TorneoService {

  private endPoint:string  = "https://pilaeaplication.herokuapp.com/pilae/torneo";
  private endPoint2:string = 'https://pilaezuul.herokuapp.com/pilae-service/pilae/torneo';
  private id:String;
  private headerText = new HttpHeaders({'Content-type':'text/plain'})
  constructor(private http: HttpClient) { }

  listAll(): Observable<Torneo []>{
  
    return this.http.get<Torneo []>(this.endPoint);
  }
  createTorneo(object: Torneo): Observable<Torneo>{
    return this.http.post<Torneo>(this.endPoint2,object);
  }
  deleteTorneo(id: number): Observable<Torneo>{
    return this.http.delete<Torneo>(this.endPoint2.concat(id.toString()));
  }
  updateTorneo(id: number,object:Torneo): Observable<Torneo>{
    return this.http.put<Torneo>(this.endPoint2.concat(id.toString()),object);
  }
  
}

