import { Component, Input } from '@angular/core';
import { Personaje } from '../../models/Personaje.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ficha-personaje',
  imports: [CommonModule],
  templateUrl: './ficha-personaje.html',
  styleUrl: './ficha-personaje.css'
})
export class FichaPersonaje {

  @Input() per!: Personaje;

  getFondo(): string {
    if(this.per.raza == 'Humano') {
      return '#75A4BA';
    } else if(this.per.raza == 'Vampiro') {
      return '#913936';
    } else if(this.per.raza == 'No humano') {
      return '#5F4669';
    } else if(this.per.raza == 'Hombre lobo') {
      return '#896C53';
    } else {
      return '#86A165';
    }
  }

  getEstrellas(): string[] {
    return Array(this.per.poder).fill('⭐');
  }

}
