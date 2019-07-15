import { Component, OnInit } from '@angular/core';
import { Torneo } from '../../model/Torneo';
import { EquipoService } from 'src/app/services/equipo.service';
import { Equipo } from 'src/app/model/Equipo';
import { JugadorService } from 'src/app/services/jugador.service';
import { Jugador } from 'src/app/model/Jugador';
import { ActivatedRoute, RouteReuseStrategy } from '@angular/router';
import { JugadorDate } from 'src/app/model/jugadorDate';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {
  filterPost = '';
  jugadorSeleccionado: Jugador;
  jugadores: Jugador[] = [];
  codigo: number;
  jugador: Jugador;
  jugadorDate: JugadorDate;
  jugadorCreate: Jugador;
  jugadorDateCreate: JugadorDate;
  idEquipo: number;
  equipos: Equipo[];
  screen:boolean=false;
  isAuthenticated: boolean;
  constructor(public oktaAuth: OktaAuthService,private jugadorService: JugadorService, private route: ActivatedRoute, private equipoService: EquipoService) { }

  showPopup(jugador: Jugador) {
    this.jugadorSeleccionado = jugador;

  }
  delete() {
    this.jugadorService.deleteJugador(this.jugadorSeleccionado.id).subscribe((_ => { this.jugadores = this.jugadores.filter(per => per != this.jugadorSeleccionado) }));

  }
  showPopupUpdate(jugador: Jugador) {
    this.jugador = new Jugador;
    this.jugadorSeleccionado = jugador;
    console.log(this.jugadorSeleccionado)

  }

  update() {
    this.jugador.fechaNacimiento = new Date(this.jugadorDate.fechaNacimiento).getTime();
    this.jugadorService.updateJugador(this.jugadorSeleccionado.id, this.jugador).subscribe(
      (jugador) => {
        this.jugador = jugador
      }
    )
  }
  registrar() {
    this.jugadorCreate.fechaNacimiento = new Date(this.jugadorDateCreate.fechaNacimiento).getTime();
    this.jugadorService.createJugador(this.idEquipo, this.jugadorCreate).subscribe()
  }
  refresh(): void {
    window.location.reload();
 }
 async ngOnInit() {
  this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  this.oktaAuth.$authenticationState.subscribe(
    (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
  );
    var width = window.innerWidth;
    if (width <= 768) {
      this.screen = true;
    } else {
      this.screen = false
    }

    this.jugadorCreate = new Jugador;
    this.jugadorDateCreate = new JugadorDate;
    this.equipoService.listAll().subscribe(
      (equipos) => {
        this.equipos = equipos
      })
    this.jugadorDate = new JugadorDate;
    this.jugador = new Jugador;
    this.route.params.subscribe(params => {
      this.jugadorService.listJugador(+params['id']).subscribe(
        (jugadores) => {
          this.jugadores = jugadores
        }
      )
    })
  }
}
