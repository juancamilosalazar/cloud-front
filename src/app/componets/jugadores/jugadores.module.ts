import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipeModule } from 'src/app/pipes/filter.module';
import { JugadoresComponent } from './jugadores.component';
import { AuthRoutingModule } from '../../auth-routing.module';

@NgModule({
  declarations: [JugadoresComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FilterPipeModule,
    AuthRoutingModule
  
  ],exports: [JugadoresComponent]
})
export class JugadoresModule { }
