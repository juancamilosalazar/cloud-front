import { Component, OnInit } from '@angular/core';
import { Torneo } from '../../model/Torneo';
import { EquipoService } from 'src/app/services/equipo.service';
import { Equipo } from 'src/app/model/Equipo';
import { JugadorService } from 'src/app/services/jugador.service';
import { Jugador } from 'src/app/model/Jugador';
import { ActivatedRoute, RouteReuseStrategy } from '@angular/router';
import { tablaPosiciones } from 'src/app/model/tablaPosiciones';
import { TablaPosicionesService } from 'src/app/services/tablaPosiciones.service';

@Component({
  selector: 'app-tabla-posiciones',
  templateUrl: './tabla-posiciones.component.html',
  styleUrls: ['./tabla-posiciones.component.css']
})
export class TablaPosicionesComponent implements OnInit {
  filterPost = '';
  tablaPosiciones: tablaPosiciones[] = [];
  codigo: number;
  screen:boolean=false;
  constructor(private tablaPosicionesService: TablaPosicionesService, private route: ActivatedRoute) { }
  ngOnInit() {
    var width = window.innerWidth;
    if (width <= 768) {
      this.screen = true;
    } else {
      this.screen = false
    }
    this.route.params.subscribe(params => {
      this.tablaPosicionesService.listFixture(+params['id']).subscribe(
        (tablaPosiciones) => {
          this.tablaPosiciones = tablaPosiciones.resultado
        })
    })
  }
}