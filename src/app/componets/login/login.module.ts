import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipeModule } from 'src/app/pipes/filter.module';
import { LoginComponent } from './login.component';
import { AuthRoutingModule } from '../../auth-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FilterPipeModule,
    AuthRoutingModule
  
  ],exports: [LoginComponent]
})
export class LoginModule { }
