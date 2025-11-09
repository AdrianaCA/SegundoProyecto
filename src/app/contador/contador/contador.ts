import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Consola } from '../../services/consola';
import { Evento } from '../../services/evento';

@Component({
  selector: 'app-contador',
  imports: [CommonModule],
  templateUrl: './contador.html',
  styleUrl: './contador.css'
})
export class Contador {

  evento:Evento;
  numero:number = 10;

  constructor(private consola:Consola, evento:Evento) {
    this.evento = evento;
  }

  incrementar() {
    if(this.numero < 10) {
      this.numero++;
    }
    
  }

  decrementar() {
    if(this.numero > 0) {
      this.numero--;
    }
  }

  resetear() {
    this.numero = 10;
    this.consola.mostrarEnConsola("El contador se ha reseteado");
  }

}
