import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyMultPipe } from './my-mult.pipe';
import { MyAddPipe } from './my-add.pipe';
import { MarvellousChkPipe } from './marvellous-chk.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyMultPipe,
    MyAddPipe,
    MarvellousChkPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
