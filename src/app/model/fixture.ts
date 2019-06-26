import { Equipo } from './Equipo';
import { Torneo } from './Torneo';

export class Fixture {
    codigo : number;
    fechaDelPartido : Number;
    idaVuelta : string;
    ronda : string;
    estadoPartido: string;
    fkEquipoLocal:Equipo;
    fkEquipoVisitante:Equipo;
    fkTorneo:Torneo;
}