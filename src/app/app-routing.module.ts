import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{InicioComponent} from '../app/componentes/componentes/inicio/inicio.component'
import{PageNotFoundComponent} from '../app/componentes/componentes/page-not-found/page-not-found.component'
import{EscuchaComponent} from '../app/componentes/componentes/escucha/escucha.component'

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'Inicio', component:InicioComponent},
  {path: 'Escucha', component: EscuchaComponent},
  {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
