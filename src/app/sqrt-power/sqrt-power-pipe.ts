import {Pipe, PipeTransform} from '@angular/core';  

@Pipe ({  
    name : 'sqrtwithpower'  
  })
  export class SqrtPipe implements PipeTransform {  
    
    transform(val : number , power : number) : number {  
      return Math.pow(Math.sqrt(val),power) ;
    }  
  }  