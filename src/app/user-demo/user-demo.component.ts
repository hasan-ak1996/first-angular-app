import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-demo',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.css']
})
export class UserDemoComponent implements OnInit {
  userName : string ;
  

  constructor( private userservice : UserService) { 
  }

  ngOnInit(): void {
  }
  signIn() : void{
    this.userservice.setUser({
      name : 'hasan alhallak'
    });
    this.userName = this.userservice.getUser().name;
  }

}
