export class Partida {
    id!: number;
    nombre!: string;
    juego!: string;
    fecha!: string;
    jugadores!: { name: string, avatar?: string; status: string } [];
}
