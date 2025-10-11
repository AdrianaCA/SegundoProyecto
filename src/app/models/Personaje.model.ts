export class Personaje {
    nombre!: string;
    raza!: string;
    poder!: number;
    imagen!: string;

    constructor(nombre: string, raza: string, poder:number, imagen: string) {
        this.nombre = nombre;
        this.raza = raza;
        this.poder = poder;
        this.imagen = imagen;
    }
}