import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import * as fromFilterActions from '../../store/filter/filter.actions'
import { clearCompleted } from '../../store/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: fromFilterActions.filtrosValidos
  filtros: fromFilterActions.filtrosValidos[] = ['todos', 'pendientes', 'completados'];
  pendientes:number;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(state =>{
      this.filtroActual = state.filter;
      this.pendientes = state.todos.filter(todo => !todo.completado).length;}
      )
  }

  cambiarFiltro(filtro : fromFilterActions.filtrosValidos): void {
    this.store.dispatch(fromFilterActions.setFiltro({filtro: filtro}));
  }

  clearCompleted(){
    this.store.dispatch(clearCompleted());
  }
}
