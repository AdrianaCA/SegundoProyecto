import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Evento {

  eventoActual:string = "normal";

  cambiarEvento(nuevoEvento:string) {
    this.eventoActual = nuevoEvento;
  }

  getFondo() {
    if(this.eventoActual == "halloween") {
      return 'images/fondo-halloween';
    } else if(this.eventoActual == "navidad") {
      return 'images/fondo-navidad';
    } else {
      return 'images/fondo-normal';
    }
  }
  
}
