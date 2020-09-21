import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-injector-demo',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.css']
})
export class UserDemoInjectorComponent implements OnInit {
  userName : string ;
  userservice : UserService;

  constructor() { 

  }

  ngOnInit(): void {
    const Injector : any = ReflectiveInjector.resolveAndCreate([UserService]);
    this.userservice = Injector.get(UserService);
  }
  signIn() : void{
    this.userservice.setUser({
      name : 'hasan alhallak'
    });
    this.userName = this.userservice.getUser().name;
  }

}