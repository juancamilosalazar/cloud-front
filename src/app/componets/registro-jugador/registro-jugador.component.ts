import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/model/Jugador';
import { JugadorService } from 'src/app/services/jugador.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro-jugador',
  templateUrl: './registro-jugador.component.html',
  styleUrls: ['./registro-jugador.component.css']
})
export class RegistroJugadorComponent implements OnInit {

  jugador:Jugador;
  idEquipo:number;
  constructor(private jugadorService:JugadorService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.jugador=new Jugador;
    
  }
  registrar(){
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
