import reducer, { AppState } from '../reducer';
import { CounterActions, CounterActionTypes } from '../../actionCreators/counter';
import { DisplayTextActions, DisplayTextActionTypes } from '../../actionCreators/displayText';

describe('Reducer - reducer', () => {

    /**
     * TODO:
     *  - Add tests for 'start/stop auto incr/decr'
     *  - Split into files to mirror reducers
     */

    it('Should start with the correct default state', () => {

        const defaultState: AppState = {
            count: {
                value: 0,
                autoDecrementing: false,
                autoIncrementing: false
            },
            displayText: ''
        };

        expect(reducer(undefined, {} as any)).toEqual(defaultState);

    });

    it('Should start increment correctly', () => {

        const startState: AppState = {
            count: {
                value: 3,
                autoDecrementing: false,
                autoIncrementing: false
            },
            displayText: 'abc'
        };

        const endState: AppState = {
            count: {
                value: 4,
                autoDecrementing: false,
                autoIncrementing: false
            },
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
            count: {
                value: 0,
                autoDecrementing: false,
                autoIncrementing: false
            },
            displayText: ''
        };

        const endState: AppState = {
            count: {
                value: -1,
                autoDecrementing: false,
                autoIncrementing: false
            },
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
            count: {
                value: -1,
                autoDecrementing: false,
                autoIncrementing: false
            },
            displayText: ''
        };

        const endState: AppState = {
            count: {
                value: -1,
                autoDecrementing: false,
                autoIncrementing: false
            },
            displayText: 'abc'
        };

        const action: DisplayTextActions.SetText = {
            type: DisplayTextActionTypes.SET_TEXT,
            payload: { text: 'abc' }
        };

        const resultState = reducer(startState, action);

        expect(resultState).toEqual(endState);
        expect(resultState).not.toBe(startState);

    });

    it('Should start clear text correctly', () => {

        const startState: AppState = {
            count: {
                value: 0,
                autoDecrementing: false,
                autoIncrementing: false
            },
            displayText: 'abc'
        };

        const endState: AppState = {
            count: {
                value: 0,
                autoDecrementing: false,
                autoIncrementing: false
            },
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
