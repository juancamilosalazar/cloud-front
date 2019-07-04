import { Component, OnInit } from '@angular/core';
import { Torneo } from '../../model/Torneo';
import { TorneoService } from '../../services/torneo.service';
import { DeporteService } from 'src/app/services/deporte.service';
import { Deporte } from 'src/app/model/deporte';

@Component({
   selector: 'app-listar',
   templateUrl: './listar.component.html',
   styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

   torneos: Torneo[] = [];
   torneoSelecionado: Torneo;
   filterPost = '';
   torneo: Torneo;
   torneoCreate:Torneo;
   screen:boolean=false;
   idDeporte:number;
   deportes:Deporte[];
   constructor(private personaService: TorneoService,private deporteService:DeporteService) { }
   ngOnInit() {
      var width = window.innerWidth;
      if (width <= 768) {
         this.screen=true;
      }else {
        this.screen=false
      }
      this.torneoCreate= new Torneo;
      this.torneo = new Torneo;
      this.personaService.listAll().subscribe(
         (personas) => {
            this.torneos = personas
         }
      )
      this.deporteService.listAll().subscribe(
         (deportes) =>{
            this.deportes=deportes
         }
      )
   }
   showPopup(torneo: Torneo) {
      this.torneoSelecionado = torneo;
      console.log(this.torneoSelecionado)

   }
   showPopupUpdate(torneo: Torneo) {
      this.torneo = new Torneo;
      this.torneoSelecionado = torneo;
      console.log(this.torneoSelecionado)

   }

   registrar(){
      this.personaService.createTorneo(this.torneoCreate,this.idDeporte)
      .subscribe(torneos => console.log(torneos));
    }

   delete() {
      this.personaService.deleteTorneo(this.torneoSelecionado.codigo).subscribe(_ => { this.torneos = this.torneos.filter(per => per != this.torneoSelecionado) });
   }
   update() {
      this.personaService.updateTorneo(this.torneoSelecionado.codigo, this.torneo).subscribe(
         (torneo) => {
            this.torneo = torneo
         }
      )
   }
}


