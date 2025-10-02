import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormularioComponent } from './formulario/formulario.component';

export const routes: Routes = [

    {path: 'inicio', title: 'INICIO', component: InicioComponent},
    {path: 'clientes', title: 'CLIENTES', component: ClientesComponent},
    {path: 'formulario', title: 'FORMULARIO', component: FormularioComponent},
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    {path:'**', component: InicioComponent},
];
