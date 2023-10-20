import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UuidService } from '../services/uuid.service';
import { Itodo } from '../../models/interface';
import { TodoService } from '../services/todo.service';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})

export class TodoFormComponent implements OnInit {
todoForm !: FormGroup;
  constructor(
    private _uuidService : UuidService,
    private _todoService : TodoService
    ) { }

  ngOnInit(): void {
    this.createTodoForm()
  }

  createTodoForm(){
    this.todoForm = new FormGroup({
      todoItem : new FormControl(null, [Validators.required])
    })
  }

  onTodoAdd(){
    if(this.todoForm.valid){
      // console.log(this.todoForm.value);
      // api call to POST a data in database
      let todoObj : Itodo = {...this.todoForm.value, todoId : this._uuidService.uuid()}
      console.log(todoObj);
      this.todoForm.reset()
      this._todoService.addTodoItem(todoObj)

      // todoObj.todoId = this._uuidService.uuid();
      // console.log(todoObj)
    }
  }

}
