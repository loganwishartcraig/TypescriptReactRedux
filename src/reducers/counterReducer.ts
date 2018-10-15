import { produce } from 'immer';
import { Reducer } from 'redux';
import { CounterActionTypes } from '../actionCreators/counter';
import { AppActions } from '../actionCreators/types';

export type CounterState = number;

const defaultState: CounterState = 0;

const reducer: Reducer<CounterState, AppActions> = (state = defaultState, action) => {

    switch (action.type) {
        case CounterActionTypes.INCREMENT:
            return produce(state, draft => draft + 1);
        case CounterActionTypes.DECREMENT:
            return produce(state, draft => draft - 1);
        default:
            return state;
    }

};

export { reducer as counterReducer };
