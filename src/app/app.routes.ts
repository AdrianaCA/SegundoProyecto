import { Routes } from '@angular/router';
import { Contador } from './contador/contador/contador';
import { Matatopos } from './matatopos/matatopos/matatopos';
import { Carrera } from './carrera/carrera';
import { PasoParametros } from './paso-parametros/paso-parametros';
import { EyeCandy } from './eye-candy/eye-candy';
import { ListaPersonajes } from './lista/lista-personajes/lista-personajes';
import { FormularioRegistro } from './formulario-registro/formulario-registro';
import { FormularioHalloween } from './formulario-halloween/formulario-halloween';

export const routes: Routes = [
    { path: 'contador', component: Contador },
    { path: 'matatopos', component: Matatopos },
    { path: 'carrera', component: Carrera },
    { path: 'paso-parametros/:num', component: PasoParametros },
    { path: 'eye-candy', component: EyeCandy },
    { path: 'lista/lista-personajes', component: ListaPersonajes },
    { path: 'formulario-registro', component: FormularioRegistro },
    { path: 'formulario-halloween', component: FormularioHalloween }
];
