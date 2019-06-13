import { Component, OnInit } from '@angular/core';
import { Torneo } from '../../model/Torneo';
import { TorneoService } from '../../services/torneo.service';
import { Equipo } from 'src/app/model/Equipo';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-registro-equipo',
  templateUrl: './registro-equipo.component.html',
  styleUrls: ['./registro-equipo.component.css']
})
export class RegistroEquipoComponent implements OnInit {

  equipo: Equipo;
  idTorneo: number;
  constructor(private equipoService:EquipoService) { }

  ngOnInit() {
    this.equipo = new Equipo()
    
  }
  registrar(){
    this.equipoService.createEquipo(this.equipo,this.idTorneo)
    .subscribe(torneos => console.log(torneos));
  }

}

