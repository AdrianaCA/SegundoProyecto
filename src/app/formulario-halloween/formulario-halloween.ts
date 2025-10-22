import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {provideNativeDateAdapter} from '@angular/material/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-halloween',
  imports: [CommonModule , ReactiveFormsModule, MatSelectModule, MatDatepickerModule, MatCheckboxModule, MatInputModule],
  templateUrl: './formulario-halloween.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './formulario-halloween.css'
})
export class FormularioHalloween {

  formulario: FormGroup;

  tipoInvitados: string[] = ['Humano', 'Fantasma', 'Vampiro', 'Bruja'];
  enviado:boolean = false;
  mensajeExito: string | null = null;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      tipoInvitado: ['', ],
      disfraz: ['', Validators.required],
      fechaLlegada: ['', Validators.required],
      aceptaReglas: ['', Validators.required]
    });
  }

  submit() {
    this.enviado = true;
    if(this.formulario.valid) {
      this.mensajeExito = '🎃 ¡Bienvenido/a, ' + this.formulario.get('nombre')
        + '! Tu entrada para la fiesta del castillo ha sido registrada con éxito.';
    } else {
      this.mensajeExito = 'Formulario no válido';
    }
  }

}
