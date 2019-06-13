import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/model/Jugador';
import { JugadorService } from 'src/app/services/jugador.service';
import { ActivatedRoute } from '@angular/router';
import { Equipo } from 'src/app/model/Equipo';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-update-equipos',
  templateUrl: './update-equipos.component.html',
  styleUrls: ['./update-equipos.component.css']
})
export class UpdateEquiposComponent implements OnInit {

  equipo: Equipo;
  constructor(private equipoService:EquipoService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.equipo = new Equipo();
  }

    update() {
      this.route.params.subscribe(params=>{

        this.equipoService.updateEquipo(+params['id'],this.equipo).subscribe(
           (equipo) => {
               this.equipo = equipo
           }
        )
      })  
 }

}

