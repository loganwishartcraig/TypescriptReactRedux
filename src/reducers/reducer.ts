import { combineReducers, Reducer, ReducersMapObject } from 'redux';
import { AppActions } from '../actionCreators/types';
import { counterReducer, CounterState } from './counterReducer';
import { displayTextReducer, DisplayTextState } from './displayTextReducer';

export interface AppState {
    readonly count: CounterState;
    readonly displayText: DisplayTextState;
}

const reducerMapObject: ReducersMapObject<AppState, AppActions> = {
    count: counterReducer,
    displayText: displayTextReducer
};

const rootReducer: Reducer<AppState, AppActions> = combineReducers(reducerMapObject);

export default rootReducer;
