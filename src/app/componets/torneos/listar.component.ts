import { Component, OnInit } from '@angular/core';
import { Torneo } from '../../model/Torneo';
import { TorneoService } from '../../services/torneo.service';
import { DeporteService } from 'src/app/services/deporte.service';
import { Deporte } from 'src/app/model/deporte';
import { OktaAuthService } from '@okta/okta-angular';
import { SpinnerService } from '../spinner/spinner.service';

@Component({
   selector: 'app-listar',
   templateUrl: './listar.component.html',
   styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
   isAuthenticated: boolean;
   torneos: Torneo[] = [];
   torneoSelecionado: Torneo;
   filterPost = '';
   torneo: Torneo;
   torneoCreate: Torneo;
   screen: boolean = false;
   idDeporte: number;
   deportes: Deporte[];
   hi: string = "hola"
   constructor(public oktaAuth: OktaAuthService,private personaService: TorneoService, private deporteService: DeporteService,private spinnerService: SpinnerService) {

   }
   isLoading$ = this.spinnerService.isLoading$;

   async ngOnInit() {
      this.isAuthenticated = await this.oktaAuth.isAuthenticated();
      this.oktaAuth.$authenticationState.subscribe(
         (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
      );

      var width = window.innerWidth;
      if (width <= 768) {
         this.screen = true;
      } else {
         this.screen = false
      }
      this.torneoCreate = new Torneo;
      this.torneo = new Torneo;
      this.personaService.listAll().subscribe(
         (respuesta) => {
            this.torneos = respuesta.resultado
         }
      )
      this.deporteService.listAll().subscribe(
         (respuesta) => {
            this.deportes = respuesta.resultado
         }
      )
   }
   refresh(): void {
      window.location.reload();
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

   registrar() {
      this.personaService.createTorneo(this.torneoCreate, this.idDeporte)
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


