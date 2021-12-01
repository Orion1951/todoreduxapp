import { Action, createReducer, on } from '@ngrx/store';
 import * as fromFilterActions from 'src/app/store/filter/filter.actions';
 
export const initialState: fromFilterActions.filtrosValidos = 'todos';
 
const _filtroReducer = createReducer<fromFilterActions.filtrosValidos, Action>(
  initialState,
  on(fromFilterActions.setFiltro, (state, {filtro}) => filtro  ),
);
 
export function filtroReducer(state, action) {
  return _filtroReducer(state, action);
}