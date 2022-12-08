import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{InicioComponent} from '../app/componentes/componentes/inicio/inicio.component'
import{PageNotFoundComponent} from '../app/componentes/componentes/page-not-found/page-not-found.component'
import{EscuchaComponent} from '../app/componentes/componentes/escucha/escucha.component'
import{ContactoComponent} from '../app/componentes/componentes/contacto/contacto.component'
import {AgregaBandaComponent} from '../app/componentes/componentes/agrega-banda/agrega-banda.component'
import { AgregaNotaComponent } from '../app/componentes/agrega-nota/agrega-nota.component'

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'Inicio', component:InicioComponent},
  {path: 'Contacto', component: ContactoComponent},
  {path: 'Escucha', component: EscuchaComponent},
  {path: 'AgregaBanda', component: AgregaBandaComponent},
  {path: 'AgregaNota', component: AgregaNotaComponent},
  {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
