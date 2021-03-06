import { AuthGuard } from './servicios/auth.guard';
import { EncuestaComponent } from './componentes/encuesta/encuesta.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent
  },
  {
    path: 'ingreso',
    loadChildren: () => import('./ingreso/ingreso.module').then(m => m.IngresoModule)
  },
  {
    path: 'juegos',
    loadChildren: () => import('./juegos/juegos.module').then(m => m.JuegosModule),
    // canActivate : [AuthGuard]
  },
  { 
    path: 'encuesta', 
    component: EncuestaComponent,
    // canActivate : [AuthGuard]
  },
  { 
    path: 'quien-soy', 
    component: QuienSoyComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
