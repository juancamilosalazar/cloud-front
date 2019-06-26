import { Equipo } from './Equipo';

export class JugadorDate {
    id : number;
    nombre : string;
    identificacion : string;
    fechaNacimiento : Date;
    fkEquipo: Equipo;
}