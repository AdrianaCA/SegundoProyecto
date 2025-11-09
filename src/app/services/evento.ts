import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Evento {

  eventoActual:string = "normal";

  cambiarEvento(nuevoEvento:string) {
    this.eventoActual = nuevoEvento;
  }
  
}
