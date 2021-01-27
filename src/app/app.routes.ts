import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { ClientesDetalleComponent } from './components/clientes-detalle/clientes-detalle.component';
import { ClientesListadoComponent } from './components/clientes-listado/clientes-listado.component';
import { ClientesComponent } from './components/clientes/clientes.component';

const APP_ROUTES: Routes = [
    { path: '', component: CardComponent },
    { path: 'clientes', component: ClientesComponent,
    children: [
          { path: '', component: ClientesListadoComponent },
          { path: ':id', component: ClientesDetalleComponent },
      ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

