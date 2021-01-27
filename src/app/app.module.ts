import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { DarkModeService } from './services/darkmode.service';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClientesListadoComponent } from './components/clientes-listado/clientes-listado.component';
import { ClientesDetalleComponent } from './components/clientes-detalle/clientes-detalle.component';
import { AppRoutingModule } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ClientesComponent,
    ClientesListadoComponent,
    ClientesDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DarkModeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
