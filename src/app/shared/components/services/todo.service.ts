import { Injectable } from '@angular/core';
import { Itodo } from '../../models/interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoArray : Array<Itodo> = [
    {
      todoId : 1,
      todoItem : 'Angular'
    }
  ]

  constructor() { }

  getAllToItems(){
    //api calling
    return this.todoArray;
  }

  addTodoItem(todo : Itodo){
    this.todoArray.push(todo)
  }
}
