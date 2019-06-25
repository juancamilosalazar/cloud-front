
import { Component, OnInit } from '@angular/core';
import { Torneo } from '../../model/Torneo';
import { EquipoService } from 'src/app/services/equipo.service';
import { Equipo } from 'src/app/model/Equipo';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-tree-table',
  templateUrl: './tree-table.component.html',
  styleUrls: ['./tree-table.component.css']
})
export class TreeTableComponent implements OnInit {
  equipoSelecionado:Equipo;
  equipos: Equipo[] = [];
  filterPost = '';
  constructor(private equipoService:EquipoService) { }

  ngOnInit() {
     this.equipoService.listAll().subscribe(
        (equipos) => {
            this.equipos = equipos
            
        }
     )
      
  }
  showPopup(equipo:Equipo) {
    this.equipoSelecionado=equipo; 
    console.log(this.equipoSelecionado)
    this.delete()
 }
 
    delete() {
    this.equipoService.deleteEquipo(this.equipoSelecionado.codigo).subscribe(_ => {this.equipos=this.equipos.filter(per=>per!=this.equipoSelecionado)});
    
 }
}