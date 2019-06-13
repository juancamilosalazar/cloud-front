import { Component, OnInit } from '@angular/core';
import { Torneo } from '../../model/Torneo';
import { TorneoService } from '../../services/torneo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-torneos',
  templateUrl: './update-torneos.component.html',
  styleUrls: ['./update-torneos.component.css']
})
export class UpdateTorneosComponent implements OnInit {

  torneo: Torneo;
  constructor(private personaService:TorneoService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.torneo = new Torneo()   
    console.log(this.torneo);
  }

    update() {
      this.route.params.subscribe(params=>{

        this.personaService.updateTorneo(+params['id'],this.torneo).subscribe(
           (torneo) => {
               this.torneo = torneo
           }
        )
      })  
 }

}
