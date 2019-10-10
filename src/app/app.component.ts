import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './states.component';
import { IncrementarAction, DecrementarAction } from './components/components.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  contador: Number = 0;

  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe(contador => this.contador = contador);
  }

  ngOnInit() {

  }

  incrementar() {
    const action = new IncrementarAction();
    this.store.dispatch(action);
  }

  decrementar() {
    const action = new DecrementarAction();
    this.store.dispatch(action);
  }
}
