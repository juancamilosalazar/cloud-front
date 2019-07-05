import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/model/Jugador';
import { Fixture } from 'src/app/model/fixture';
import { ActivatedRoute } from '@angular/router';
import { FixtureService } from 'src/app/services/fixture.service';
import { Marcador } from 'src/app/model/marcador';
import { EquipoService } from 'src/app/services/equipo.service';
import { Equipo } from 'src/app/model/Equipo';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {
  numero: Number;
  marcadores: Marcador;
  fixtures: Fixture[];
  fixtureSeleccionado: Fixture;
  comparador: boolean;
  marcador: Marcador;
  equipos: Equipo[];
  screen: boolean = false;
  fixtureCreate: Fixture;
  idLocal:number;
  idVisitante:number;
  constructor(private fixtureService: FixtureService, private route: ActivatedRoute, private equipoService: EquipoService) { }

  showPopup(fixture: Fixture) {
    this.fixtureSeleccionado = fixture;
    console.log(this.fixtureSeleccionado)
    this.marcador = new Marcador;
    console.log(this.fixtureSeleccionado.codigo)
  }
  showPopuppartido(fixture: Fixture) {
    this.fixtureSeleccionado = fixture;
    this.mostrarPartido()
    console.log(this.fixtureSeleccionado)
    console.log(this.fixtureSeleccionado.codigo)
  }
  registrar() {
    this.route.params.subscribe(params => {
      this.fixtureService.createPartido(this.fixtureCreate,+params['id'],this.idLocal,this.idVisitante).subscribe(
        (fixture) => {
          this.fixtureCreate = fixture
        }
      )
    })
  }

jugar() {
    this.fixtureService.jugarPartido(this.fixtureSeleccionado.codigo, this.marcador).subscribe(
      (marcador) => {
        this.marcador = marcador
      }
    )
  
}

ngOnInit() {
  this.fixtureCreate = new Fixture;
  var width = window.innerWidth;
  if (width <= 768) {
    this.screen = true;
  } else {
    this.screen = false
  }

  this.marcadores = new Marcador
  this.marcador = new Marcador;
  this.comparador = false;
  this.route.params.subscribe(params => {
    this.equipoService.listAllByTorneo(+params['id']).subscribe(
      (equipos) => {
        this.equipos = equipos
        console.log(equipos)
      }
    )
  })
  this.route.params.subscribe(params => {
    this.fixtureService.listFixture(+params['id']).subscribe(
      (fixtures) => {
        this.fixtures = fixtures
        console.log(this.fixtures[1].fechaDelPartido)
      }
    )
  })


}
mostrarPartido() {
  this.route.params.subscribe(params => {
    this.fixtureService.mostrarMarcador(this.fixtureSeleccionado.codigo).subscribe(
      (marcadores) => {
        this.marcadores = marcadores
        console.log(marcadores.equipoLocalMrc)
      }
    )
  })
}
crearFixture() {
  this.route.params.subscribe(params => {
    this.fixtureService.saveFixture(+params['id']).subscribe(
      (fixtures) => {
        this.fixtures = fixtures
      }
    )
  })

}
refresh(): void {
  window.location.reload();
}
crearFixtureNotReturn() {
  this.route.params.subscribe(params => {
    this.fixtureService.saveFixtureNotReturn(+params['id']).subscribe(
      (fixtures) => {
        this.fixtures = fixtures
      }
    )
  })

}
}
