import { TypedAction, TypedActionCreator } from './types';

export const enum CounterActionTypes {
  INCREMENT = 'COUNTER::INCREMENT',
  DECREMENT = 'COUNTER::DECREMENT',
  INCREMENT_ASYNC = 'COUNTER::INCREMENT_ASYNC',
  START_INCREMENT_TIMER = 'COUNTER::INCREMENT_TIMER::START',
  END_INCREMENT_TIMER = 'COUNTER::INCREMENT_TIMER::END',
  START_DECREMENT_TIMER = 'COUNTER::DECREMENT_TIMER::START',
  END_DECREMENT_TIMER = 'COUNTER::DECREMENT_TIMER::END'
}

// interface Actions {

//   Increment: TypedAction<CounterActionTypes.INCREMENT>;
//   Decrement: TypedAction<CounterActionTypes.DECREMENT>;
//   IncrementAsync: TypedAction<CounterActionTypes.INCREMENT_ASYNC>;
//   StartIncrementTimer: TypedAction<CounterActionTypes.START_INCREMENT_TIMER>;
//   EndIncrementTimer: TypedAction<CounterActionTypes.END_INCREMENT_TIMER>;
//   StartDecrementTimer: TypedAction<CounterActionTypes.START_DECREMENT_TIMER>;
//   EndDecrementTimer: TypedAction<CounterActionTypes.END_DECREMENT_TIMER>;

// }

// type __any<T> = T[keyof T];

export namespace CounterActions {

  export type Increment = TypedAction<CounterActionTypes.INCREMENT>;
  export type Decrement = TypedAction<CounterActionTypes.DECREMENT>;
  export type IncrementAsync = TypedAction<CounterActionTypes.INCREMENT_ASYNC>;
  export type StartIncrementTimer = TypedAction<CounterActionTypes.START_INCREMENT_TIMER>;
  export type EndIncrementTimer = TypedAction<CounterActionTypes.END_INCREMENT_TIMER>;
  export type StartDecrementTimer = TypedAction<CounterActionTypes.START_DECREMENT_TIMER>;
  export type EndDecrementTimer = TypedAction<CounterActionTypes.END_DECREMENT_TIMER>;

  // export type _any = __any<Actions>;
  export type _any = (
    Increment |
    Decrement |
    IncrementAsync |
    StartIncrementTimer |
    EndIncrementTimer |
    StartDecrementTimer |
    EndDecrementTimer
  );
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

export const startIncrementTimer: TypedActionCreator<CounterActions.StartIncrementTimer> = () => ({
  type: CounterActionTypes.START_INCREMENT_TIMER
});

export const endIncrementTimer: TypedActionCreator<CounterActions.EndIncrementTimer> = () => ({
  type: CounterActionTypes.END_INCREMENT_TIMER
});
