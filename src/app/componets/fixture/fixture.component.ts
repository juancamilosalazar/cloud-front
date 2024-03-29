import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/model/Jugador';
import { Fixture } from 'src/app/model/fixture';
import { ActivatedRoute } from '@angular/router';
import { FixtureService } from 'src/app/services/fixture.service';
import { Marcador } from 'src/app/model/marcador';
import { EquipoService } from 'src/app/services/equipo.service';
import { Equipo } from 'src/app/model/Equipo';
import { OktaAuthService } from '@okta/okta-angular';

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
  fixtureUpdate: Fixture;
  idLocal:number;
  idVisitante:number;
  isAuthenticated: boolean;
  dateUpdate: Date;
  constructor(public oktaAuth: OktaAuthService,private fixtureService: FixtureService, private route: ActivatedRoute, private equipoService: EquipoService) { }


  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
    this.fixtureCreate = new Fixture;
    var width = window.innerWidth;
    if (width <= 768) {
      this.screen = true;
    } else {
      this.screen = false
    }
    
    this.fixtureUpdate= new Fixture
    this.marcadores = new Marcador
    this.marcador = new Marcador;
    this.comparador = false;
    this.route.params.subscribe(params => {
      this.equipoService.listAllByTorneo(+params['id']).subscribe(
        (equipos) => {
          this.equipos = equipos.resultado
          console.log(equipos)
        }
      )
    })
    this.route.params.subscribe(params => {
      this.fixtureService.listFixture(+params['id']).subscribe(
        (fixture) => {
          this.fixtures = fixture.resultado
          console.log("entra alk fixture" + fixture)
        }
      )
    })
    
  
  
  }  
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

mostrarPartido() {
  this.route.params.subscribe(params => {
    this.fixtureService.mostrarMarcador(this.fixtureSeleccionado.codigo).subscribe(
      (marcadores) => {
        this.marcadores = marcadores.resultado.slice(0, 1).shift();
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
showPopupUpdate(fixture: Fixture) {
  this.fixtureUpdate = new Fixture
  this.fixtureSeleccionado = fixture;
  console.log(this.fixtureSeleccionado)

}
update() {
  this.fixtureUpdate.fechaDelPartido= new Date(this.dateUpdate).getTime();
  this.fixtureService.updatePartido(this.fixtureUpdate, this.fixtureSeleccionado.codigo).subscribe(
     (fixtureUpdate) => {
        this.fixtureUpdate = fixtureUpdate
     }
  )
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
