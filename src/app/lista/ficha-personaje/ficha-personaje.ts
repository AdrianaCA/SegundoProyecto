import { Component, Input } from '@angular/core';
import { Personaje } from '../../models/Personaje.model';

@Component({
  selector: 'app-ficha-personaje',
  imports: [],
  templateUrl: './ficha-personaje.html',
  styleUrl: './ficha-personaje.css'
})
export class FichaPersonaje {

  @Input() per: Personaje | undefined;

}
