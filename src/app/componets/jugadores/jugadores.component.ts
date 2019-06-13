import { Component, OnInit } from '@angular/core';
import { Torneo } from '../../model/Torneo';
import { EquipoService } from 'src/app/services/equipo.service';
import { Equipo } from 'src/app/model/Equipo';
import { JugadorService } from 'src/app/services/jugador.service';
import { Jugador } from 'src/app/model/Jugador';
import { ActivatedRoute, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {
  filterPost = '';
  jugadorSeleccionado:Jugador;
  jugadores: Jugador[] = [];
  codigo:number;
  constructor(private jugadorService:JugadorService, private route: ActivatedRoute) { }
 
 showPopup(jugador:Jugador) {
    this.jugadorSeleccionado=jugador; 
    this.delete();
    
 }
 delete(){
 this.jugadorService.deleteJugador(this.jugadorSeleccionado.id).subscribe((_ => {this.jugadores=this.jugadores.filter(per=>per!=this.jugadorSeleccionado)}));
 }
  ngOnInit() {
    
      
     
    
    this.route.params.subscribe(params=>{
      
      this.jugadorService.listJugador(+params['id']).subscribe(
         (jugadores) => {
        
             this.jugadores = jugadores
         }
      )
    })    
  }
}
