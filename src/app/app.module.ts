import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { frutaComponent } from './fruta/fruta.component';
import { empleadosComponent } from './empleados/empleados.component';

@NgModule({
  declarations: [
    AppComponent,
    frutaComponent,
    empleadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
