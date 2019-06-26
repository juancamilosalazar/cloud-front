import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/model/Jugador';
import { Fixture } from 'src/app/model/fixture';
import { ActivatedRoute } from '@angular/router';
import { FixtureService } from 'src/app/services/fixture.service';
import { Marcador } from 'src/app/model/marcador';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {
  numero:Number;
  marcadores:Marcador;
  fixtures:Fixture[];
  fixtureSeleccionado:Fixture;
  comparador:boolean;
  
  constructor(private fixtureService:FixtureService, private route: ActivatedRoute) { }

  showPopup(fixture:Fixture) {
    this.fixtureSeleccionado=fixture; 
    this.mostrarPartido(fixture.codigo);

 }
  ngOnInit() {
    
    this.comparador= false;
    this.route.params.subscribe(params=>{
      this.fixtureService.listFixture(+params['id']).subscribe(
         (fixtures) => {
          this.fixtures = fixtures
          console.log(this.fixtures[1].fechaDelPartido)
         }
      )
    })
    

    }
    mostrarPartido(numero:Number){
      
      this.route.params.subscribe(params=>{
        this.fixtureService.mostrarMarcador(numero).subscribe(
           (marcador) => {
            this.marcadores = marcador
            
            console.log(marcador.equipoLocalMrc)
           }
        )
      })
      }
    crearFixture(){
      this.route.params.subscribe(params=>{
        this.fixtureService.saveFixture(+params['id']).subscribe(
          (fixtures)=>{
            this.fixtures=fixtures 
          }
        )
      })
      
  }
}
