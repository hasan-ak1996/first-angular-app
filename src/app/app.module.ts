import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';  
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import {SimpleStyleDirective} from './simple-style/simple-style.directive';
import {SqrtPipe} from './sqrt-power/sqrt-power-pipe';
import { Server2Component } from './server2/server2.component';
import { PipeExampelsComponent } from './pipe-exampels/pipe-exampels.component';
import { SignupComponent } from './signup/signup.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    SqrtPipe,
    AppComponent,
    ServerComponent,
    SimpleStyleDirective,
    Server2Component,
    PipeExampelsComponent,
    SignupComponent,
    TodoListComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
