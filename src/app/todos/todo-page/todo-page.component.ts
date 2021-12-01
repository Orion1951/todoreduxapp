import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/models/todo.models';
import { AppState } from '../../store/app.reducer';
import * as fromActions from '../../store/todo.actions'

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  completado : boolean = false;
  
  constructor(private store : Store<AppState>) {
   }

  ngOnInit(): void {
  }

  toggleAll(){
    this.completado = !this.completado;
    this.store.dispatch(fromActions.toggleAll({completado:this.completado}))
  }

}
