import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ReactiveFormsAssignmentComponent } from './reactive-forms-assignment/reactive-forms-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsAssignmentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
