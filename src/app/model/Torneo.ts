import { Deporte } from './deporte';

export class Torneo {
    codigo : number;
    nombre : string;
    descripcion : string;
    equipos : [];
    fkDeporte: Deporte;
}

