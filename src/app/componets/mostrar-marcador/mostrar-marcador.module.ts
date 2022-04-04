import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipeModule } from 'src/app/pipes/filter.module';
import { AuthRoutingModule } from '../../auth-routing.module';
import { MostrarMarcadorComponent } from './mostrar-marcador.component';

@NgModule({
  declarations: [MostrarMarcadorComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FilterPipeModule,
    AuthRoutingModule
  
  ],exports: [MostrarMarcadorComponent]
})
export class MostrarMarcadorModule { }
