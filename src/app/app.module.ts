import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';  
import { AppComponent } from './app.component';
import { Server2Component } from './server2/server2.component';
import {SimpleStyleDirective} from './simple-style/simple-style.directive';
import {SqrtPipe} from './sqrt.component';
import { NameEditorComponent } from './name-editor/name-editor.component';

@NgModule({
  declarations: [
    SqrtPipe,
    AppComponent,
    Server2Component,
    SimpleStyleDirective,
    NameEditorComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
