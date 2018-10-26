import { incrementAsync, watchIncrementAsync, incrementTimer, watchIncrementTimer, watchDecrementTimer, decrementTimer } from '../increment';
import { call, put, takeEvery, cancel, take, fork } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { CounterActionTypes, CounterActions } from '../../actionCreators/counter';
import { createMockTask } from 'redux-saga/utils';

describe('Sagas - increment', () => {

    it('incrementAsync should produce the correct sequence of results', () => {

        const gen = incrementAsync();

        const action: CounterActions.Increment = {
            type: CounterActionTypes.INCREMENT
        };

        expect(gen.next()).toEqual({ done: false, value: call(delay, 1000) });
        expect(gen.next()).toEqual({ done: false, value: put(action) });
        expect(gen.next().done).toBe(true);

    });

    it('watchIncrementAsync should produce the correct watch', () => {

        const gen = watchIncrementAsync();

        expect(gen.next()).toEqual({ done: false, value: takeEvery(CounterActionTypes.INCREMENT_ASYNC, incrementAsync) });
        expect(gen.next().done).toBe(true);

    });

    it('incrementTimer should produce the correct sequence', () => {

        const gen = incrementTimer();

        const action: CounterActions.Increment = {
            type: CounterActionTypes.INCREMENT
        };

        expect(gen.next()).toEqual({ done: false, value: put(action) });
        expect(gen.next(true)).toEqual({ done: false, value: call(delay, 1000) });
        expect(gen.next()).toEqual({ done: false, value: put(action) });
        expect(gen.next(true)).toEqual({ done: false, value: call(delay, 1000) });
        expect(gen.next()).toEqual({ done: false, value: put(action) });
        expect(gen.next(false).done).toBe(true);

    });

    it('watchIncrementTimer should produce the correct sequence', () => {

        const gen = watchIncrementTimer();

        const taskMock = createMockTask();

        expect(gen.next()).toEqual({ done: false, value: take(CounterActionTypes.START_INCREMENT_TIMER) });
        expect(gen.next(true)).toEqual({ done: false, value: fork(incrementTimer) });
        expect(gen.next(taskMock)).toEqual({ done: false, value: take(CounterActionTypes.END_INCREMENT_TIMER) });
        expect(gen.next()).toEqual({ done: false, value: cancel(taskMock) });
        expect(gen.next()).toEqual({ done: false, value: take(CounterActionTypes.START_INCREMENT_TIMER) });
        expect(gen.next(false).done).toBe(true);

    });

    it('watchDecrementTimer should produce the correct sequence', () => {

        const gen = watchDecrementTimer();

        const taskMock = createMockTask();

        expect(gen.next()).toEqual({ done: false, value: take(CounterActionTypes.START_DECREMENT_TIMER) });
        expect(gen.next(true)).toEqual({ done: false, value: fork(decrementTimer) });
        expect(gen.next(taskMock)).toEqual({ done: false, value: take(CounterActionTypes.END_DECREMENT_TIMER) });
        expect(gen.next()).toEqual({ done: false, value: cancel(taskMock) });
        expect(gen.next()).toEqual({ done: false, value: take(CounterActionTypes.START_DECREMENT_TIMER) });
        expect(gen.next(false).done).toBe(true);

    });

});
