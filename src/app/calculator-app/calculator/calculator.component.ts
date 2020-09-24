import { Component } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  longButtons : string[] = ['AC' , 'CE'];
  buttons : string[] = ['7' , '8' , '9' , '/' , '4' , '5' , '6' , '*' , '1', '2', '3' , '-' , '.' , '0' , '=' , '+'];
  result : string = '';
  private preValue : string ='';
  private currValue : string = '';

  addToExpression( value : string ){

    if( value == 'AC'){
      this.result = '';
    }
    else if( value == 'CE'){
      this.result = this.result.slice(0 , -1) ;
    }
    else if (value == '='){
      this.result = eval(this.result);
    }
    else{
      this.result += value;
    }
   console.log(value)

  }

}
