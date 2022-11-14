import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TelaEstadiosComponent } from './components/tela-estadios/tela-estadios.component';
import { TelaFaleConoscoComponent } from './components/tela-fale-conosco/tela-fale-conosco.component';
import { TelaGruposComponent } from './components/tela-grupos/tela-grupos.component';
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';


const routes: Routes = [
  { path: '', component: TelaInicialComponent },
  { path: 'login', component: LoginComponent },
  { path: 'grupos', component: TelaGruposComponent },
  { path: 'fale-conosco', component: TelaFaleConoscoComponent },
  { path: 'estadios', component: TelaEstadiosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
