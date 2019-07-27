import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GeoKBDModule } from 'projects/geo-kbd/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GeoKBDModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
