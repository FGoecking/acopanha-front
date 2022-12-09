import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';
import { TelaGruposComponent } from './components/tela-grupos/tela-grupos.component';
import { TelaFaleConoscoComponent } from './components/tela-fale-conosco/tela-fale-conosco.component';
import { TelaEstadiosComponent } from './components/tela-estadios/tela-estadios.component';

import { HttpClientModule } from '@angular/common/http';
import { acopanha } from './services/acopanha.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    TelaInicialComponent,
    TelaGruposComponent,
    TelaFaleConoscoComponent,
    TelaEstadiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [acopanha],
  bootstrap: [AppComponent]
})
export class AppModule { }
