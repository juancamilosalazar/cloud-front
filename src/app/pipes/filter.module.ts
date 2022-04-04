import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [FilterPipe],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
  
  ],exports: [FilterPipe]
})
export class FilterPipeModule { }
