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
import {  UserDemoComponent } from './user-demo/user-demo.component';
import { UserService } from './services/user.service';
import {RouterModule , Routes} from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Product } from './product.model';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes : Routes = [
  {path : '' , redirectTo : 'home' , pathMatch : 'full'},
  {path : 'home' , component : HomeComponent } ,
  {path : 'about' , component : AboutComponent },
  {path : 'contact' , component : ContactComponent} , 
  {path : 'contactus' , redirectTo : 'contact'} , 

];



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
    UserDemoComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    NavbarComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),


  ],
  providers: [{ provide : UserService , useClass : UserService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
