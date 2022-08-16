import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pages/principal/app.component';
import { SegundoComponent } from './pages/segundo/segundo.component';
import { TerceroComponent } from './pages/tercero/tercero.component';
import { CuartaComponent } from './pages/cuarta/cuarta.component';
import { QuintaComponent } from './pages/quinta/quinta.component';
import { SextaComponent } from './pages/sexta/sexta.component';
import { SeptimaComponent } from './pages/septima/septima.component';

@NgModule({
  declarations: [
    AppComponent,
    SegundoComponent,
    TerceroComponent,
    CuartaComponent,
    QuintaComponent,
    SextaComponent,
    SeptimaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
