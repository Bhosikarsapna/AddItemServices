import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Itodo } from '../../models/interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
todosArray : Array<Itodo> = []
  constructor(private _todoService : TodoService) { }
  // constructor(public _todoService : TodoService) { }


  ngOnInit(): void {
    this.todosArray = this._todoService.getAllToItems()
  }

}
