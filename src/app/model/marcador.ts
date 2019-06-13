import { Fixture } from './fixture';

export class Marcador {
    codigo : number;
    equipoGanador : string;
    equipoLocalMrc : Number;
    equipoVisitanteMrc : Number;
    fkPartido:Fixture;
}