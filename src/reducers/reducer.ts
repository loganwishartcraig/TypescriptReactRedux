import { Reducer } from 'redux';
import { CounterActionTypes } from '../actionCreators/counter';
import { DisplayTextActionTypes } from '../actionCreators/displayText';
import { AppActions } from '../actionCreators/types';

export interface AppState {
    readonly count: number;
    readonly displayText: string;
}

const defaultState: AppState = {
    count: 0,
    displayText: ''
};

const reducer: Reducer<AppState, AppActions> = (state: AppState = defaultState, action: AppActions): AppState => {

    switch (action.type) {
        case CounterActionTypes.INCREMENT:
            return { ...state, count: state.count + 1 };
        case CounterActionTypes.DECREMENT:
            return { ...state, count: state.count - 1 };
        case DisplayTextActionTypes.CLEAR_TEXT:
            return { ...state, displayText: '' };
        case DisplayTextActionTypes.SET_TEXT:
            return { ...state, displayText: action.text };
        default:
            return state;
    }

};

export default reducer;
