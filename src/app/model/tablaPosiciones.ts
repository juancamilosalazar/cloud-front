import { Equipo } from './Equipo';
import { Torneo } from './Torneo';

export class tablaPosiciones {
    codigo : number;
    partidosJugados : number;
    partidosGanados : number;
    partidosPerdidos : number;
    partidosEmpatados: number;
    golesFavor: number;
    golesContra: number;
    golesDiferencia: number;
    puntos: number;
    fkEquipo: Equipo;
    fkTorneo: Torneo;
}