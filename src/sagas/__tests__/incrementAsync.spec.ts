import { incrementAsync } from '../incrementAsync';
import { call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { CounterActionTypes, CounterActions } from '../../actionCreators/counter';

describe('Sagas - incrementAsync', () => {

    it('Should produce the correct sequence of results', () => {

        const gen = incrementAsync();

        const action: CounterActions.Increment = {
            type: CounterActionTypes.INCREMENT
        };

        expect(gen.next()).toEqual({ done: false, value: call(delay, 1000) });
        expect(gen.next()).toEqual({ done: false, value: put(action) });
        expect(gen.next().done).toBe(true);

    });

});
