import { createReducer, on } from '@ngrx/store';
import * as fromActions from './todo.actions';
import { Todo } from '../models/todo.models';
import { state } from '@angular/animations';

export const initialState: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Encontrar las gemas del infinito'),
  new Todo('Vencer a thanos'),
];

const _todoReducer = createReducer(
  initialState,
  on(fromActions.crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(fromActions.editar, (state, { id,texto }) => {
    return state.map((todo) => {
      if (todo.id == id) {
        return {
          ...todo,
          texto: texto,
        };
      } else{
        return todo;
      }
    });
  }),
  on(fromActions.toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id == id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else{
        return todo;
      }
    });
  }),
  on(fromActions.borrar, (state, { id }) => {
    return state.filter(todo => todo.id !== id)  
  }),
  on(fromActions.toggleAll, (state, { completado }) =>  state.map(todo =>{
      return {
        ...todo,
        completado: completado
      }
    })
  ),
  on(fromActions.clearCompleted,state => state.filter(todo =>
      !todo.completado ))
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
