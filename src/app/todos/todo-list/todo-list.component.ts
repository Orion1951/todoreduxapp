import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/models/todo.models';
import { AppState } from 'src/app/store/app.reducer';
import { filtrosValidos } from 'src/app/store/filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  filtroActual: filtrosValidos

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store
    .subscribe(({todos, filter}) => {
      this.todos = todos;
      this.filtroActual = filter;
      }
      );
  }

}
