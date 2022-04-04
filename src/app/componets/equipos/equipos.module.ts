import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { TreeTableComponent } from './tree-table.component';
import { FilterPipeModule } from 'src/app/pipes/filter.module';

@NgModule({
  declarations: [TreeTableComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FilterPipeModule
  
  ],exports: [TreeTableComponent]
})
export class EquiposModule { }
