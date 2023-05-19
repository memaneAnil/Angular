import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayRecordComponent } from './display-record/display-record.component';
import { AppComponent } from './app.component';
import { InsertRecordComponent } from './insert-record/insert-record.component';
import { UpdateRecordComponent } from './update-record/update-record.component';
import { DeleteRecordComponent } from './delete-record/delete-record.component';

const routes: Routes = [{path:'read',component:DisplayRecordComponent},
{path:'insert',component:InsertRecordComponent},
{path:'update',component:UpdateRecordComponent},
{path:'delete',component:DeleteRecordComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
