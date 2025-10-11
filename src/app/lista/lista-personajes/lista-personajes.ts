import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../models/Personaje.model';
import { FichaPersonaje } from '../ficha-personaje/ficha-personaje';

@Component({
  selector: 'app-lista-personajes',
  imports: [FichaPersonaje],
  templateUrl: './lista-personajes.html',
  styleUrl: './lista-personajes.css'
})
export class ListaPersonajes implements OnInit {

  personajes: Personaje[] = [];

  ngOnInit(): void {
    this.personajes[0] = new Personaje('Ifan', 'Humano', 4, 'images/ifan.jpg');
    this.personajes[1] = new Personaje('Astarion', 'Vampiro', 5, 'images/astarion.jpg');
    this.personajes[2] = new Personaje('Arthur', 'Humano', 3, 'images/arthur.jpg');
    this.personajes[3] = new Personaje('Fane', 'No muerto', 4, 'images/fane.jpg');
    this.personajes[4] = new Personaje('Bigby', 'Hombre lobo', 5, 'images/bigby.jpg');
  }

}
