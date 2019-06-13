import { Torneo } from './Torneo';

export class Equipo {
    codigo : number;
    nombre : string;
    locacion : string;
    genero : string;
    fkTorneo : Torneo;
    jugadores :[];
}