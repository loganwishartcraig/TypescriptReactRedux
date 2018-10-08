import { Reducer } from 'redux';
import { AppActions } from '../actionCreators';
import * as CounterAction from '../constants/counter';

export interface AppState {
    readonly count: number;
}

const defaultState: AppState = {
    count: 0
};

const reducer: Reducer<AppState, AppActions> = (state: AppState = defaultState, action: AppActions): AppState => {

    switch (action.type) {
        case CounterAction.INCREMENT:
            return { count: state.count + 1 };
        case CounterAction.DECREMENT:
            return { count: state.count - 1 };
        default:
            return state;
    }

};

export default reducer;
