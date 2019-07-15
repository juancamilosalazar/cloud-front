import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./componets/home/home.component";
import {ListarComponent} from "./componets/torneos/listar.component";

import { from } from 'rxjs';
import {TreeTableComponent} from "./componets/equipos/tree-table.component";
import { JugadoresComponent } from './componets/jugadores/jugadores.component';
import { FixtureComponent } from './componets/fixture/fixture.component';
import { TablaPosicionesComponent } from './componets/tabla-posiciones/tabla-posiciones.component';
import { MostrarMarcadorComponent } from './componets/mostrar-marcador/mostrar-marcador.component';
import { LoginComponent } from './componets/login/login.component';
import { OktaAuthGuard } from '@okta/okta-angular';
const routes: Routes = [
  
  {path:'Torneos', component:ListarComponent},
  {path:'Home', component:HomeComponent},
  {path:'Equipos', component:TreeTableComponent},
  {path:'Jugadores/:id', component:JugadoresComponent},
  {path:'Fixture/:id', component:FixtureComponent},
  {path:'tabla-posiciones/:id', component:TablaPosicionesComponent},
  {path:'resultado/:id', component:MostrarMarcadorComponent},
  {path:'login', component:LoginComponent,canActivate: [OktaAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
