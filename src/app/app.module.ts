import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesComponent } from './componentes/componentes/componentes.component';
import { NavbarComponent } from './componentes/componentes/navbar/navbar.component';
import { InicioComponent } from './componentes/componentes/inicio/inicio.component';
import { PageNotFoundComponent } from './componentes/componentes/page-not-found/page-not-found.component';
import { FooterComponent } from './componentes/componentes/footer/footer.component';
import { EscuchaComponent } from './componentes/componentes/escucha/escucha.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    NavbarComponent,
    InicioComponent,
    PageNotFoundComponent,
    FooterComponent,
    EscuchaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
