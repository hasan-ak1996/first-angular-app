import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder, Validators, AbstractControl, FormControl} from '@angular/forms';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class DemoFormSkuWithBuilderComponent implements OnInit {
  myForm : FormGroup;
  fullName  : AbstractControl;
  email  : AbstractControl;
  password  : AbstractControl;
  confirmPassword  : AbstractControl;


  constructor( fb: FormBuilder ) { 
    this.myForm = fb.group({
      'fullName' : ['' , Validators.required],
      'email' : ['' , Validators.compose([Validators.required , Validators.email])],
      'password' : ['' , Validators.required],
      'confirmPassword' : ['' , Validators.required],

    });
    this.fullName = this.myForm.controls['fullName'];
    this.email = this.myForm.controls['email'];
    this.password = this.myForm.controls['password'];
    this.confirmPassword = this.myForm.controls['confirmPassword'];
    
  }

  ngOnInit(): void {
  }
  onSubmit(value : any){
    console.log('you submitted value:', value);
  }



}
