import { Action } from 'redux';
import { TypedActionCreator } from './types';

export const enum CounterActionTypes {
  INCREMENT = 'COUNTER::INCREMENT',
  DECREMENT = 'COUNTER::DECREMENT'
}

export namespace CounterActions {
  export type Increment = Action<CounterActionTypes.INCREMENT>;
  export type Decrement = Action<CounterActionTypes.DECREMENT>;
  export type _any = Increment | Decrement;
}

export const incrCounter: TypedActionCreator<CounterActions.Increment> = () => ({
  type: CounterActionTypes.INCREMENT
});

export const decrCounter: TypedActionCreator<CounterActions.Decrement> = () => ({
  type: CounterActionTypes.DECREMENT
});

// function myFunc<T extends any[]>(...args: T) {
//   return;
// }

// myFunc<[string]>('abc');
