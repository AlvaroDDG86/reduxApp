
import * as act from './components.actions';
import { actions } from './components.actions';


export function componentReducer(state: number = 10, action: actions) {
  switch (action.type) {
    case act.INCREMENTAR:
      return state + 1;

    case act.DECREMENTAR:
      return state - 1;

    case act.MULTIPLICAR:
      return state * action.payload;

    case act.DIVIDIR:
      return state / action.payload;

    case act.RESET:
      return 0;

    default:
      return state;
  }
}
