import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/model/Jugador';
import { JugadorService } from 'src/app/services/jugador.service';
import { ActivatedRoute } from '@angular/router';
import { JugadorDate } from 'src/app/model/jugadorDate';
import { EquipoService } from 'src/app/services/equipo.service';
import { Equipo } from 'src/app/model/Equipo';

@Component({
  selector: 'app-registro-jugador',
  templateUrl: './registro-jugador.component.html',
  styleUrls: ['./registro-jugador.component.css']
})
export class RegistroJugadorComponent implements OnInit {

  jugador:Jugador;
  jugadorDate:JugadorDate;
  idEquipo:number;
  equipos: Equipo[];

  constructor(private jugadorService:JugadorService,private route: ActivatedRoute,
    private equipoService: EquipoService) { }

  ngOnInit() {
    this.jugador=new Jugador;
    this.jugadorDate= new JugadorDate;
    this.equipoService.listAll().subscribe(
      (equipos) => {
          this.equipos = equipos
          
      })
  }
  registrar(){
    this.jugador.fechaNacimiento = new Date(this.jugadorDate.fechaNacimiento).getTime();
    this.route.params.subscribe(params=>{

      this.jugadorService.createJugador(this.idEquipo,this.jugador).subscribe(
         (jugador) => {
             this.jugador = jugador
             
         }
)
  }
    )
  
}
}
