import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bin2descModule } from './bin2desc/bin2desc.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Bin2descModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
