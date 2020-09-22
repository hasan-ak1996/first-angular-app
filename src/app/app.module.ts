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
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';

 import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './music-app/search/search.component';
import { SpotifyService } from './music-app/spotify-service';
import { TrackComponent } from './music-app/track/track.component';
import { AuthService } from './auth-service-class/auth-service';
import { LoginComponent } from './login/login.component';
import { ProtuctedComponent } from './protucted/protucted.component';
import { LoggedInGuard } from './logged-in-guard';

const routes : Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contactus', redirectTo: 'contact' },
  { path: 'login', component: LoginComponent },
  {
     path: 'protected',
     component: ProtuctedComponent,
     canActivate: [ LoggedInGuard ]
   },
  { path: 'search', component: SearchComponent },
  { path: 'tracks/:id', component: TrackComponent }
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
    NavbarComponent,
    SearchComponent,
    TrackComponent,
    LoginComponent,
    ProtuctedComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule


  ],
  providers: [
    { provide : UserService , useClass : UserService },
    {provide : SpotifyService , useClass : SpotifyService},
    { provide: AuthService, useClass: AuthService },
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
