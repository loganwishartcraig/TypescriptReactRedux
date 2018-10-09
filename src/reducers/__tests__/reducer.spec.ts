// import * as CounterActionCreators from '../../actionCreators/counter';
import reducer, { AppState } from '../reducer';
import { CounterActions, CounterActionTypes } from '../../actionCreators/counter';
import { DisplayTextActions, DisplayTextActionTypes } from '../../actionCreators/displayText';

describe('Reducer - reducer', () => {

    it('Should start with the correct default state', () => {

        const defaultState: AppState = {
            count: 0,
            displayText: ''
        };

        expect(reducer(undefined, {} as any)).toEqual(defaultState);

    });

    it('Should start increment correctly', () => {

        const startState: AppState = {
            count: 3,
            displayText: 'abc'
        };

        const endState: AppState = {
            count: 4,
            displayText: 'abc'
        };

        const action: CounterActions.Increment = {
            type: CounterActionTypes.INCREMENT
        };

        const resultState = reducer(startState, action);

        expect(resultState).toEqual(endState);
        expect(resultState).not.toBe(startState);

    });

    it('Should start decrement correctly', () => {

        const startState: AppState = {
            count: 0,
            displayText: ''
        };

        const endState: AppState = {
            count: -1,
            displayText: ''
        };

        const action: CounterActions.Decrement = {
            type: CounterActionTypes.DECREMENT
        };

        const resultState = reducer(startState, action);

        expect(resultState).toEqual(endState);
        expect(resultState).not.toBe(startState);

    });

    it('Should start set text correctly', () => {

        const startState: AppState = {
            count: -1,
            displayText: ''
        };

        const endState: AppState = {
            count: -1,
            displayText: 'abc'
        };

        const action: DisplayTextActions.SetText = {
            type: DisplayTextActionTypes.SET_TEXT,
            text: 'abc'
        };

        const resultState = reducer(startState, action);

        expect(resultState).toEqual(endState);
        expect(resultState).not.toBe(startState);

    });

    it('Should start clear text correctly', () => {

        const startState: AppState = {
            count: 0,
            displayText: 'abc'
        };

        const endState: AppState = {
            count: 0,
            displayText: ''
        };

        const action: DisplayTextActions.ClearText = {
            type: DisplayTextActionTypes.CLEAR_TEXT
        };

        const resultState = reducer(startState, action);

        expect(resultState).toEqual(endState);
        expect(resultState).not.toBe(startState);

    });

});
