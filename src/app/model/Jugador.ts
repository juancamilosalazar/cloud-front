import { Equipo } from './Equipo';

export class Jugador {
    id : number;
    nombre : string;
    identificacion : string;
    fechaNacimiento : Date;
    fkEquipo: Equipo;
}