import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/models/todo.models';
import * as fromActions from 'src/app/store/todo.actions';
import { AppState } from '../../store/app.reducer';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('inputFisico') txtInputFisico: ElementRef;

  chckCompletado: FormControl;
  txtInput: FormControl;
  editando: boolean =false;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.chckCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto,Validators.required);
    this.chckCompletado.valueChanges.subscribe(valor =>{
      this.store.dispatch(fromActions.toggle({id : this.todo.id}))
    })

  }
  
  editar(){
    this.editando = true; 
    this.txtInput.setValue(this.todo.texto);
    setTimeout(() =>{
    this.txtInputFisico.nativeElement.select();
    },1)
  }

  terminarEdicion(){
    this.editando = false; 
    if(this.txtInput.invalid) return;
    if(this.txtInput.value == this.todo.texto) return;
    this.store.dispatch(fromActions.editar({id:this.todo.id,texto:this.txtInput.value}))
  }

  borrar(){
    this.store.dispatch(fromActions.borrar({id:this.todo.id}))
  }
}
