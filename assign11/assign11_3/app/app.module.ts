import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { MarvellousChkPipe } from './marvellous-chk.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    MarvellousChkPipe,
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
