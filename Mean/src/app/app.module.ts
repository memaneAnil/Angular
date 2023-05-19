import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarvellousService } from './marvellous.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InsertRecordComponent } from './insert-record/insert-record.component';
import { DeleteRecordComponent } from './delete-record/delete-record.component';
import { UpdateRecordComponent } from './update-record/update-record.component';
import { DisplayRecordComponent } from './display-record/display-record.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InsertRecordComponent,
    DeleteRecordComponent,
    UpdateRecordComponent,
    DisplayRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [MarvellousService],
  bootstrap: [AppComponent]
})
export class AppModule { }
