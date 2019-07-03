
import { Component, OnInit } from '@angular/core';
import { Torneo } from '../../model/Torneo';
import { EquipoService } from 'src/app/services/equipo.service';
import { Equipo } from 'src/app/model/Equipo';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { TorneoService } from 'src/app/services/torneo.service';

@Component({
   selector: 'app-tree-table',
   templateUrl: './tree-table.component.html',
   styleUrls: ['./tree-table.component.css']
})
export class TreeTableComponent implements OnInit {
   equipoSelecionado: Equipo;
   equipos: Equipo[] = [];
   filterPost = '';
   equipo: Equipo;
   idTorneo: number;
   torneos: Torneo[];
   equipoCreate: Equipo;
   screen:boolean = false;
   constructor(private equipoService: EquipoService, private personaService: TorneoService) { }

   ngOnInit() {
      var width = window.innerWidth;
      if (width <= 768) {
         this.screen=true;
      } else if (width > 768 && width <= 992) {
         console.log('tablet detected')
      } else {
         console.log('desktop detected')
      }
      this.equipo = new Equipo;
      this.equipoCreate = new Equipo;
      this.personaService.listAll().subscribe(
         (torneos) => {
            this.torneos = torneos
         }
      )
      this.equipoService.listAll().subscribe(
         (equipos) => {
            this.equipos = equipos

         }
      )

   }
   showPopup(equipo: Equipo) {
      this.equipoSelecionado = equipo;

   }
   showPopupUpdate(equipo: Equipo) {
      this.equipo = new Equipo;
      this.equipoSelecionado = equipo;
      console.log(this.equipoSelecionado)

   }

   update() {
      this.equipoService.updateEquipo(this.equipoSelecionado.codigo, this.equipo).subscribe(
         (equipo) => {
            this.equipo = equipo
         }
      )
   }
   registrar() {
      this.equipoService.createEquipo(this.equipoCreate, this.idTorneo)
         .subscribe(torneos => console.log(torneos));
   }

   delete() {
      this.equipoService.deleteEquipo(this.equipoSelecionado.codigo).subscribe(_ => { this.equipos = this.equipos.filter(per => per != this.equipoSelecionado) });

   }
}