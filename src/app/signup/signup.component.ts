import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //create the formgroup object for singup
  form = new FormGroup({
    fullName : new FormControl("",Validators.required),
    email : new FormControl("",Validators.email),
    password : new FormControl("",Validators.required),
    confirmPassword : new FormControl("",Validators.required)
  });
  

}
