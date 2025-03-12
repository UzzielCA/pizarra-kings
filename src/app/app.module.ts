import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PizarraComponent } from './pizarra/pizarra.component';

@NgModule({
  declarations: [
    AppComponent,
    PizarraComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, PizarraComponent]
})
export class AppModule { }
