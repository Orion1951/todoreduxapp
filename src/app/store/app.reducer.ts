import { ActionReducerMap } from '@ngrx/store';
import { Todo } from '../models/todo.models';
import { todoReducer } from './todo.reducer';
import { filtrosValidos } from './filter/filter.actions';
import { filtroReducer } from './filter/filter.reducer';
export interface AppState{
    todos : Todo[]
    filter: filtrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filtroReducer
}