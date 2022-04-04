
import { Component, OnInit } from '@angular/core';
import { Torneo } from '../../model/Torneo';
import { EquipoService } from 'src/app/services/equipo.service';
import { Equipo } from 'src/app/model/Equipo';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { TorneoService } from 'src/app/services/torneo.service';
import { OktaAuthService } from '@okta/okta-angular';
import { ActivatedRoute } from '@angular/router';
import { SpinnerService } from '../spinner/spinner.service';

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
   screen: boolean = false;
   isAuthenticated: boolean;
   constructor(private route: ActivatedRoute,public oktaAuth: OktaAuthService,private equipoService: EquipoService, private personaService: TorneoService,private spinnerService: SpinnerService) {

   }
   isLoading$ = this.spinnerService.isLoading$;

   async ngOnInit() {
      this.isAuthenticated = await this.oktaAuth.isAuthenticated();
      this.oktaAuth.$authenticationState.subscribe(
        (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
      );
      var width = window.innerWidth;
      var height = window.innerHeight;
      if (width <= 768) {
         this.screen = true;
      } else {
         this.screen = false
      }
      this.equipo = new Equipo;
      this.equipoCreate = new Equipo;
      this.personaService.listAll().subscribe(
         (respuesta) => {
            this.torneos = respuesta.resultado
         }
      )
      this.route.params.subscribe(params => {
         this.equipoService.listAllByTorneo(+params['id']).subscribe(
           (equipos) => {
             this.equipos = equipos.resultado
           }
         )
       })

   }
   refresh(): void {
      window.location.reload();
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