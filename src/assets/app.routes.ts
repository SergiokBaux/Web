import { from } from "rxjs";
import{Routes, RouterModule} from'@angular/router';
import{NgModule} from '@angular/core';

const routes: Routes=[
    //{path:'Inicio', component:InicioComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true, relativeLinkResolution: 'legacy'}),],
    exports: [RouterModule]

})

export class AppRoutingModule{}