import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FirstcompComponent } from './firstcomp/firstcomp.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstcompComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
