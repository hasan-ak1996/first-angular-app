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

@NgModule({
  declarations: [
    SqrtPipe,
    AppComponent,
    ServerComponent,
    SimpleStyleDirective,
    Server2Component,
    PipeExampelsComponent,
    SignupComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
