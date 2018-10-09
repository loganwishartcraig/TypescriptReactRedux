import { TypedAction, TypedActionCreator } from './types';

export const enum CounterActionTypes {
  INCREMENT = 'COUNTER::INCREMENT',
  DECREMENT = 'COUNTER::DECREMENT'
}

export namespace CounterActions {
  export type Increment = TypedAction<CounterActionTypes.INCREMENT>;
  export type Decrement = TypedAction<CounterActionTypes.DECREMENT>;
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
