import { Component, OnInit } from '@angular/core';
import { TorneoService } from 'src/app/services/torneo.service';
import { Torneo } from 'src/app/model/Torneo';
import { FixtureService } from 'src/app/services/fixture.service';
import { Marcador } from 'src/app/model/marcador';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  torneosBasquet: Torneo[];
  torneosFutbol: Torneo[];
  torneosVolei: Torneo[];
  basquet: number = 1;
  futbol: number = 2;
  voleibol: number = 3;
  screen:boolean= false;
  torneoSelecionado:Torneo;
  marcadores:Marcador[];
  marcadorValidate:boolean=true;
  constructor(private personaService: TorneoService,private fixtureService:FixtureService) { }

  ngOnInit() {
    
    var width = window.innerWidth;
    if (width <= 768) {
      this.screen = true;
    } else {
      this.screen = false
    }
    console.log(this.personaService.listAllByDeportefutbol(this.futbol).subscribe(
      (torneosFutbol) => {
        this.torneosFutbol = torneosFutbol
        console.log(this.torneosFutbol)
      }
    ))
    this.personaService.listAllByDeportevolei(this.voleibol).subscribe(
      (torneosVolei) => {
        this.torneosVolei = torneosVolei
        console.log(this.torneosVolei)
      })
    this.personaService.listAllByDeportebasquet(this.basquet).subscribe(
      (torneosBasquet) => {
        this.torneosBasquet = torneosBasquet
        console.log(this.torneosBasquet)
      })
  }
  showPopup(torneo: Torneo) {
    this.marcadorValidate= true;
    this.torneoSelecionado = torneo;
      this.fixtureService.mostrarMarcadoresTorneo(this.torneoSelecionado.codigo).subscribe(
        (marcador) => {
          this.marcadores = marcador
          if(this.marcadores.length==0){
            this.marcadorValidate= false;
          }
          console.log(this.marcadores)
        }
      )
   
    console.log(this.torneoSelecionado)
 }
  

}
