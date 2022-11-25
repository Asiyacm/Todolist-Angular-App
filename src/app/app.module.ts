import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddtodoListComponent } from './addtodo-list/addtodo-list.component';
import { ViewtodoListComponent } from './viewtodo-list/viewtodo-list.component';
import { RouterModule, Routes } from '@angular/router';

const myRoute:Routes=[
  {
    path: "",
    component:AddtodoListComponent
  },
  {
    path:"view",
    component:ViewtodoListComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddtodoListComponent,
    ViewtodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
