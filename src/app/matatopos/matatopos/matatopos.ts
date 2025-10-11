import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-matatopos',
  imports: [CommonModule],
  templateUrl: './matatopos.html',
  styleUrl: './matatopos.css'
})
export class Matatopos {

  topos:number[] = [1,0,0,0,0,0,0,0,0];

  numero:number = 0;

  mataTopo(index:number) {
    console.log(index);

    if(this.topos[index] == 1) {
      this.topos[index] = 0;

      this.topos[Math.floor(Math.random() * 9)] = 1;

      this.numero++;
    }
  }

  fallo() {
    console.log("Esto no es un topo");
  }

}
