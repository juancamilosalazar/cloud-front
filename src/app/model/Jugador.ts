import { Equipo } from './Equipo';

export class Jugador {
    id : number;
    nombre : string;
    identificacion : string;
    fechaNacimiento : Number;
    fkEquipo: Equipo;
}