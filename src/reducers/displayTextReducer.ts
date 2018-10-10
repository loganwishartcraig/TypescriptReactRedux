import { produce } from 'immer';
import { Reducer } from 'redux';
import { DisplayTextActionTypes } from '../actionCreators/displayText';
import { AppActions } from '../actionCreators/types';

export type DisplayTextState = string;

const defaultState: DisplayTextState = '';

const reducer: Reducer<DisplayTextState, AppActions> = (state = defaultState, action) => {

    switch (action.type) {
        case DisplayTextActionTypes.CLEAR_TEXT:
            return produce(state, () => '');
        case DisplayTextActionTypes.SET_TEXT:
            return produce(state, () => action.payload.text);
        case DisplayTextActionTypes.CONCAT_TEXT:
            return produce(state, draft => draft + action.payload.text);
        default:
            return state;
    }

};

export { reducer as displayTextReducer };
