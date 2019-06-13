import { Component, OnInit } from '@angular/core';
import { Torneo } from '../../model/Torneo';
import { TorneoService } from '../../services/torneo.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  torneos: Torneo[] = [];
  torneoSelecionado:Torneo;
  filterPost = '';
  constructor(private personaService:TorneoService) { }
  

  ngOnInit() {
     this.personaService.listAll().subscribe(
        (personas) => {
            this.torneos = personas
        }
     )    
  }
  showPopup(torneo:Torneo) {
    this.torneoSelecionado=torneo; 
    console.log(this.torneoSelecionado)
    this.delete()
 }
 
    delete() {
    this.personaService.deleteTorneo(this.torneoSelecionado.codigo).subscribe(_ => {this.torneos=this.torneos.filter(per=>per!=this.torneoSelecionado)});   
 }
 
}
