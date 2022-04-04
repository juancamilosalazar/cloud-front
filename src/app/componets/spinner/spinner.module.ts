
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipeModule } from 'src/app/pipes/filter.module';
import { AuthRoutingModule } from '../../auth-routing.module';
import { SpinnerComponent } from './spinner.component';
@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule
  
  ],exports: [SpinnerComponent]
})
export class SpinnerModule { }
