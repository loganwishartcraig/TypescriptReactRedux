import * as CounterActionCreators from '../../actionCreators/counter';
import reducer, { AppState } from '../reducer';

describe('Reducer - reducer', () => {

    it('Should start with the correct default state', () => {

        const defaultState: AppState = {
            count: 0
        };

        expect(reducer(undefined, {} as any)).toEqual(defaultState);

    });

    it('Should start increment correctly', () => {

        const startState: AppState = {
            count: 3
        };

        const endState: AppState = {
            count: 4
        };

        const action: CounterActionCreators.IncrCounterAction = {
            type: 'COUNTER::INCREMENT'
        };

        expect(reducer(startState, action)).toEqual(endState);

    });

    it('Should start decrement correctly', () => {

        const startState: AppState = {
            count: 0
        };

        const endState: AppState = {
            count: -1
        };

        const action: CounterActionCreators.DecrCounterAction = {
            type: 'COUNTER::DECREMENT'
        };

        expect(reducer(startState, action)).toEqual(endState);

    });

});
