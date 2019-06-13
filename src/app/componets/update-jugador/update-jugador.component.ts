import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/model/Jugador';
import { JugadorService } from 'src/app/services/jugador.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-jugador',
  templateUrl: './update-jugador.component.html',
  styleUrls: ['./update-jugador.component.css']
})
export class UpdateJugadorComponent implements OnInit {

  jugador:Jugador;
  constructor(private jugadorService:JugadorService,private route: ActivatedRoute) {}

  ngOnInit() {
    this.jugador=new Jugador;
  }
  
  update(){
    this.route.params.subscribe(params=>{
      this.jugadorService.updateJugador(+params['id'],this.jugador).subscribe(
        (jugador)=>{
          this.jugador= jugador;
        }
      )})
  }
}


