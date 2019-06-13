import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/model/Jugador';
import { Fixture } from 'src/app/model/fixture';
import { ActivatedRoute } from '@angular/router';
import { FixtureService } from 'src/app/services/fixture.service';
import { Marcador } from 'src/app/model/marcador';

@Component({
  selector: 'app-mostrar-marcador',
  templateUrl: './mostrar-marcador.component.html',
  styleUrls: ['./mostrar-marcador.component.css']
})
export class MostrarMarcadorComponent implements OnInit {

  marcador: Marcador;

  constructor(private fixtureService: FixtureService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.fixtureService.mostrarMarcador(+params['id']).subscribe(
        (marcador) => {

          this.marcador = marcador
          console.log(marcador)
        }
      )
    })

  }
}
