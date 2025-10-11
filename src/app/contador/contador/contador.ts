import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [CommonModule],
  templateUrl: './contador.html',
  styleUrl: './contador.css'
})
export class Contador {

  numero:number = 10;

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
  }

}
