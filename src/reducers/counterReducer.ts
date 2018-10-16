import { produce } from 'immer';
import { Reducer } from 'redux';
import { CounterActionTypes } from '../actionCreators/counter';
import { AppActions } from '../actionCreators/types';

// export type CounterState = number;

export interface CounterState {
    readonly value: number;
    readonly autoIncrementing: boolean;
    readonly autoDecrementing: boolean;
}

const defaultState: CounterState = {
    value: 0,
    autoIncrementing: false,
    autoDecrementing: false
};

const reducer: Reducer<CounterState, AppActions> = (state = defaultState, action) => {

    switch (action.type) {
        case CounterActionTypes.INCREMENT:
            return produce(state, draft => { draft.value++; });
        case CounterActionTypes.DECREMENT:
            return produce(state, draft => { draft.value--; });
        case CounterActionTypes.START_INCREMENT_TIMER:
            return produce(state, draft => { draft.autoIncrementing = true; });
        case CounterActionTypes.END_INCREMENT_TIMER:
            return produce(state, draft => { draft.autoIncrementing = false; });
        default:
            return state;
    }

};

export { reducer as counterReducer };
