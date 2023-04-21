import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologyComponent } from './technology/technology.component';
import { BookComponent } from './book/book.component';
import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = 
[
  {path : 'Technologies',component : TechnologyComponent},
  {path : 'Books',component : BookComponent},
  {path : '',component : TechnologyComponent},
  {path : '**',component : OtherComponent}
  //{path:'',redirectTo:"AppComponent",pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
