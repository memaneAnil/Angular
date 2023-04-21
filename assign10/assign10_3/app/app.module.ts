import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnologyComponent } from './technology/technology.component';
import { BookComponent } from './book/book.component';
import {HttpClientModule} from '@angular/common/http';
import { OtherComponent } from './other/other.component';

@NgModule({
  declarations: [
    AppComponent,
    TechnologyComponent,
    BookComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
