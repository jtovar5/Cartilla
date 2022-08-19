import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuartaComponent } from './pages/cuarta/cuarta.component';
import { AppComponent } from './pages/principal/app.component';
import { QuintaComponent } from './pages/quinta/quinta.component';
import { SegundoComponent } from './pages/segundo/segundo.component';
import { SeptimaComponent } from './pages/septima/septima.component';
import { SextaComponent } from './pages/sexta/sexta.component';
import { TerceroComponent } from './pages/tercero/tercero.component';

const routes: Routes = [
  {
    path: 'primera-pagina',
    component:AppComponent
  },
  
  {
    path:'segunda-pagina',
    component:SegundoComponent
  },

  {
    path:'tercera-pagina',
    component:TerceroComponent
  },

  {
    path:'cuarta-pagina',
    component:CuartaComponent,
  },

  {
    path:'quinta-pagina',
    component:QuintaComponent,
  },

  {
    path:'sexta-pagina',
    component:SextaComponent,
  },

  {
    path:'septima-pagina',
    component:SeptimaComponent,
  },





];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
