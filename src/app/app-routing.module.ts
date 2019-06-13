import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./componets/home/home.component";
import {ListarComponent} from "./componets/torneos/listar.component";
import {RegistroPersonaComponent} from "./componets/registro-torneo/registro-persona.component";
import { from } from 'rxjs';
import {TreeTableComponent} from "./componets/equipos/tree-table.component";
import { JugadoresComponent } from './componets/jugadores/jugadores.component';
import { FixtureComponent } from './componets/fixture/fixture.component';
import { RegistroEquipoComponent } from './componets/registro-equipo/registro-equipo.component';
import { UpdateTorneosComponent } from './componets/update-torneo/update-torneos.component';
import { UpdateEquiposComponent } from './componets/update-equipo/update-equipos.component';
import { UpdateJugadorComponent } from './componets/update-jugador/update-jugador.component';
import { RegistroJugadorComponent } from './componets/registro-jugador/registro-jugador.component';
import { TablaPosicionesComponent } from './componets/tabla-posiciones/tabla-posiciones.component';
import { JugarPartidoComponent } from './componets/jugar-partido/jugar-partido.component';
import { MostrarMarcadorComponent } from './componets/mostrar-marcador/mostrar-marcador.component';
import { LoginComponent } from './componets/login/login.component';
const routes: Routes = [
  {path:'registro-persona', component:RegistroPersonaComponent},
  {path:'Torneos', component:ListarComponent},
  {path:'Home', component:HomeComponent},
  {path:'**',pathMatch:'full',redirectTo:'home'},
  {path:'Equipos', component:TreeTableComponent},
  {path:'Jugadores/:id', component:JugadoresComponent},
  {path:'Fixture/:id', component:FixtureComponent},
  {path:'registro-equipo', component:RegistroEquipoComponent},
  {path:'update-torneo/:id', component:UpdateTorneosComponent},
  {path:'update-equipo/:id', component:UpdateEquiposComponent},
  {path:'update-jugador/:id', component:UpdateJugadorComponent},
  {path:'registro-jugador', component:RegistroJugadorComponent},
  {path:'tabla-posiciones/:id', component:TablaPosicionesComponent},
  {path:'marcador/:id', component:JugarPartidoComponent},
  {path:'resultado/:id', component:MostrarMarcadorComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
