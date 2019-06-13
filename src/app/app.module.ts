import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componets/menu/menu.component';
import { HomeComponent } from './componets/home/home.component';
import { ListarComponent } from './componets/torneos/listar.component';
import { RegistroPersonaComponent } from './componets/registro-torneo/registro-persona.component';
import { TreeTableComponent } from './componets/equipos/tree-table.component';
import { FormsModule } from '@angular/forms';
import { JugadoresComponent } from './componets/jugadores/jugadores.component';
import { FixtureComponent } from './componets/fixture/fixture.component';
import { RegistroJugadorComponent } from './componets/registro-jugador/registro-jugador.component';
import { RegistroEquipoComponent } from './componets/registro-equipo/registro-equipo.component';
import { FilterPipe } from './pipes/filter.pipe';
import { UpdateTorneosComponent } from './componets/update-torneo/update-torneos.component';
import { UpdateEquiposComponent } from './componets/update-equipo/update-equipos.component';
import { UpdateJugadorComponent } from './componets/update-jugador/update-jugador.component';
import { TablaPosicionesComponent } from './componets/tabla-posiciones/tabla-posiciones.component';
import { JugarPartidoComponent } from './componets/jugar-partido/jugar-partido.component';
import { MostrarMarcadorComponent } from './componets/mostrar-marcador/mostrar-marcador.component';
import { LoginComponent } from './componets/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ListarComponent,
    RegistroPersonaComponent,
    TreeTableComponent,
    JugadoresComponent,
    FixtureComponent,
    RegistroJugadorComponent,
    RegistroEquipoComponent,
    FilterPipe,
    UpdateTorneosComponent,
    UpdateEquiposComponent,
    UpdateJugadorComponent,
    TablaPosicionesComponent,
    JugarPartidoComponent,
    MostrarMarcadorComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
