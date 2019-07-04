import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componets/menu/menu.component';
import { HomeComponent } from './componets/home/home.component';
import { ListarComponent } from './componets/torneos/listar.component';

import { TreeTableComponent } from './componets/equipos/tree-table.component';
import { FormsModule } from '@angular/forms';
import { JugadoresComponent } from './componets/jugadores/jugadores.component';
import { FixtureComponent } from './componets/fixture/fixture.component';

import { FilterPipe } from './pipes/filter.pipe';

import { TablaPosicionesComponent } from './componets/tabla-posiciones/tabla-posiciones.component';

import { MostrarMarcadorComponent } from './componets/mostrar-marcador/mostrar-marcador.component';
import { LoginComponent } from './componets/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ListarComponent,
    TreeTableComponent,
    JugadoresComponent,
    FixtureComponent,
    FilterPipe,
    TablaPosicionesComponent,
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
