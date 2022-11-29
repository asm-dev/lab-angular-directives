import { Component } from '@angular/core';
import { ToDoTask } from "../../models/todo-task.model";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent{
  toDoList: ToDoTask[] = [];
  toDoName: string;
  toDoTime: number;
  toDoCompleted: boolean;
 
  ngOnInit(): void {}
 
  constructor() {
    this.toDoName = "";
    this.toDoTime = 0;
    this.toDoCompleted = false;
  }
 
  addToDo() {
    const task = new ToDoTask(this.toDoName, this.toDoTime, this.toDoCompleted);
    this.toDoList.push(task);
    this.toDoName = "";
    this.toDoTime = 0;
  }

  makeGreen(task : {completed:boolean}) {
    task.completed === false? task.completed = true : task.completed = false;
  }

  remove (task : {name:string}) {
    //This removes all tasks with the same name, it would be good to use a loop to remove just the first ocurrence, some id/idx system, etc to improve this functionality
    this.toDoList = this.toDoList.filter(item => item.name !== task.name)
  }

  removeCompleted () {
    this.toDoList = this.toDoList.filter(item => item.completed !== true)
    console.log(this)
  }
}
