import { Component, OnInit } from '@angular/core';
import { Torneo } from '../../model/Torneo';
import { TorneoService } from '../../services/torneo.service';

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
   constructor(private personaService: TorneoService) { }


   ngOnInit() {
      this.torneo = new Torneo;
      this.personaService.listAll().subscribe(
         (personas) => {
            this.torneos = personas
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


