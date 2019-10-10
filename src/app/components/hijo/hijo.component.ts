import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/states.component';
import { Store } from '@ngrx/store';
import { MultiplicarAction, DividirAction } from '../components.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {
  contador: any;

  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe(contador => this.contador = contador);
  }

  ngOnInit() {
  }

  multiplicar() {
    const action = new MultiplicarAction(5);
    this.store.dispatch(action);
  }
  dividir() {
    const action = new DividirAction(5);
    this.store.dispatch(action);
  }
}
