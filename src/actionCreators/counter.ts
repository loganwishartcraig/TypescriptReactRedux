import { DECREMENT, INCREMENT } from '../constants/counter';
import { ActionCreator, Action } from 'redux';

export type IncrCounterAction = Action<INCREMENT>;
export type DecrCounterAction = Action<DECREMENT>;
export type Actions = IncrCounterAction | DecrCounterAction;

export const incrCounter: ActionCreator<IncrCounterAction> = () => ({
  type: INCREMENT
});

export const decrCounter: ActionCreator<DecrCounterAction> = () => ({
  type: DECREMENT
});
