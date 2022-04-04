import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componets/menu/menu.component';
import { HomeComponent } from './componets/home/home.component';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { EquiposModule } from './componets/equipos/equipos.module';
import { FilterPipeModule } from './pipes/filter.module';
import { FixtureModule } from './componets/fixture/fixture.module';
import { JugadoresModule } from './componets/jugadores/jugadores.module';
import { LoginModule } from './componets/login/login.module';
import { MostrarMarcadorModule } from './componets/mostrar-marcador/mostrar-marcador.module';
import { TablaPosicionesModule } from './componets/tabla-posiciones/tabla-posiciones.module';
import { TorneoModule } from './componets/torneos/torneos.module';
import { SpinnerModule } from './componets/spinner/spinner.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinerInterceptor } from './interceptors/spinner.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthRoutingModule,
    EquiposModule,
    FilterPipeModule,
    FixtureModule,
    JugadoresModule,
    LoginModule,
    MostrarMarcadorModule,
    TablaPosicionesModule,
    TorneoModule,
    SpinnerModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: SpinerInterceptor, multi : true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
