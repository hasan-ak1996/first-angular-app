import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';  
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import {SimpleStyleDirective} from './simple-style/simple-style.directive';
import {SqrtPipe} from './sqrt-power/sqrt-power-pipe';
import { Server2Component } from './server2/server2.component';
import { PipeExampelsComponent } from './pipe-exampels/pipe-exampels.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { ProductesListComponent } from './productes-list/productes-list.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { ProductDepartmentComponent } from './product-department/product-department.component';
import { PriceDisplayComponent } from './price-display/price-display.component';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';
import { DemoFormSkuWithBuilderComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    SqrtPipe,
    AppComponent,
    ServerComponent,
    SimpleStyleDirective,
    Server2Component,
    PipeExampelsComponent,
    TodoListComponent,
    ProductesListComponent,
    ProductRowComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
    PriceDisplayComponent,
    DemoFormSkuComponent,
    DemoFormSkuWithBuilderComponent,
    
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
