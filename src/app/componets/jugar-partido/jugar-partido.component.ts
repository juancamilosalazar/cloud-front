import { Component, OnInit } from '@angular/core';
import { Torneo } from '../../model/Torneo';
import { TorneoService } from '../../services/torneo.service';
import { FixtureService } from 'src/app/services/fixture.service';
import { Marcador } from 'src/app/model/marcador';
import { ActivatedRoute } from '@angular/router';
import { Fixture } from 'src/app/model/fixture';

@Component({
  selector: 'app-jugar-partido',
  templateUrl: './jugar-partido.component.html',
  styleUrls: ['./jugar-partido.component.css']
})
export class JugarPartidoComponent implements OnInit {

  marcador: Marcador;
  fixture: Fixture;
  constructor(private fixtureService: FixtureService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.marcador = new Marcador()
  }

  jugar() {
    this.route.params.subscribe(params => {
      this.fixtureService.jugarPartido(+params['id'], this.marcador).subscribe(
        (marcador) => {
          this.marcador = marcador
        }
      )
    })
  }

}
