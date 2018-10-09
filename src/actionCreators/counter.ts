import { Action, ActionCreator } from 'redux';

export const enum CounterActionTypes {
  INCREMENT = 'COUNTER::INCREMENT',
  DECREMENT = 'COUNTER::DECREMENT'
}

export namespace CounterActions {
  export type Increment = Action<CounterActionTypes.INCREMENT>;
  export type Decrement = Action<CounterActionTypes.DECREMENT>;
  export type _any = Increment | Decrement;
}

export const incrCounter: ActionCreator<CounterActions.Increment> = () => ({
  type: CounterActionTypes.INCREMENT
});

export const decrCounter: ActionCreator<CounterActions.Decrement> = () => ({
  type: CounterActionTypes.DECREMENT
});
