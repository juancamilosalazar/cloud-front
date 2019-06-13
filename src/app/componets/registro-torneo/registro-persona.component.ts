
import { Component, OnInit } from '@angular/core';
import { Torneo } from '../../model/Torneo';
import { TorneoService } from '../../services/torneo.service';

@Component({
  selector: 'app-registro-persona',
  templateUrl: './registro-persona.component.html',
  styleUrls: ['./registro-persona.component.css']
})
export class RegistroPersonaComponent implements OnInit {

  torneo: Torneo;
  constructor(private personaService:TorneoService) { }

  ngOnInit() {
    this.torneo = new Torneo()   
  }

  registrar(){
    this.personaService.createTorneo(this.torneo)
    .subscribe(torneos => console.log(torneos));
  }

}
