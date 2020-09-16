import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  tasks = []; 
  newTask; 
  constructor() { }

  ngOnInit(): void {
  }
  public addTask() { 
    if (this.newTask == '') { 
      
    } 
    else { 
        this.tasks.push(this.newTask); 
        this.newTask = ''; 
    } 
  }
  public removeTask(index) { 
    this.tasks.splice(index, 1); 
}  


}
