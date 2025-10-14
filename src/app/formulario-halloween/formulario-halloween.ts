import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-halloween',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-halloween.html',
  styleUrl: './formulario-halloween.css'
})
export class FormularioHalloween {

  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      tipoInvitado: ['', ],
      disfraz: ['', Validators.required],
      fechaLlegada: ['', Validators.required],
      aceptaReglas: ['', Validators.required]
    });
  }

}
