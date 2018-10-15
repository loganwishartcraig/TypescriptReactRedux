import { TypedAction, TypedActionCreator } from './types';

export const enum CounterActionTypes {
  INCREMENT = 'COUNTER::INCREMENT',
  DECREMENT = 'COUNTER::DECREMENT',
  INCREMENT_ASYNC = 'COUNTER::INCREMENT_ASYNC'
}

export namespace CounterActions {
  export type Increment = TypedAction<CounterActionTypes.INCREMENT>;
  export type Decrement = TypedAction<CounterActionTypes.DECREMENT>;
  export type IncrementAsync = TypedAction<CounterActionTypes.INCREMENT_ASYNC>;
  export type _any = Increment | Decrement | IncrementAsync;
}

export const incrCounter: TypedActionCreator<CounterActions.Increment> = () => ({
  type: CounterActionTypes.INCREMENT
});

export const decrCounter: TypedActionCreator<CounterActions.Decrement> = () => ({
  type: CounterActionTypes.DECREMENT
});

export const incrCounterAsync: TypedActionCreator<CounterActions.IncrementAsync> = () => ({
  type: CounterActionTypes.INCREMENT_ASYNC
});
