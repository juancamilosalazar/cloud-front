import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/model/Jugador';
import { JugadorService } from 'src/app/services/jugador.service';
import { ActivatedRoute } from '@angular/router';
import { JugadorDate } from 'src/app/model/jugadorDate';

@Component({
  selector: 'app-update-jugador',
  templateUrl: './update-jugador.component.html',
  styleUrls: ['./update-jugador.component.css']
})
export class UpdateJugadorComponent implements OnInit {

  jugador:Jugador;
  jugadorDate:JugadorDate;

  constructor(private jugadorService:JugadorService,private route: ActivatedRoute) {}

  ngOnInit() {
    this.jugadorDate=new JugadorDate;
    this.jugador=new Jugador;
  }
  
  update(){
    this.jugador.fechaNacimiento = new Date(this.jugadorDate.fechaNacimiento).getTime();
    this.route.params.subscribe(params=>{
      this.jugadorService.updateJugador(+params['id'],this.jugador).subscribe(
        (jugador)=>{
          this.jugador= jugador;
        }
      )})
  }
}


