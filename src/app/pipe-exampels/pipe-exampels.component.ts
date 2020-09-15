import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-exampels',
  templateUrl: './pipe-exampels.component.html',
  styleUrls: ['./pipe-exampels.component.css']
})
export class PipeExampelsComponent implements OnInit {
  
  priceTotal = 2500;
  myDate = new Date();
  jsonObject = {name:'hasan' , age:'24' ,education : 'computer',};
  employeesNames = ['ahmad','mohammad','yara', 'wessam','maha','fares','yousef'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
