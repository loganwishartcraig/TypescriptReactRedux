import { Reducer } from 'redux';
import { CounterActionTypes } from '../actionCreators/counter';
import { DisplayTextActionTypes } from '../actionCreators/displayText';
import { AppActions } from '../actionCreators/types';
import { produce } from 'immer';

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
            return produce(state, draft => { draft.count++; });
        case CounterActionTypes.DECREMENT:
            return produce(state, draft => { draft.count--; });
        case DisplayTextActionTypes.CLEAR_TEXT:
            return produce(state, draft => { draft.displayText = ''; });
        case DisplayTextActionTypes.SET_TEXT:
            return produce(state, draft => { draft.displayText = action.text; });
        default:
            return state;
    }

};

export default reducer;
