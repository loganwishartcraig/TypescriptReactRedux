import { delay } from 'redux-saga';
import { takeEvery, put, call, ForkEffect, CallEffect, PutEffect, take, fork, cancel } from 'redux-saga/effects';
import { incrCounter, CounterActionTypes, CounterActions } from '../actionCreators/counter';

export function* incrementAsync(): IterableIterator<CallEffect | PutEffect<CounterActions.Increment>> {
    yield call(delay, 1000);
    yield put(incrCounter());
}

export function* watchIncrementAsync(): IterableIterator<ForkEffect> {
    yield takeEvery(CounterActionTypes.INCREMENT_ASYNC, incrementAsync);
}

export function* incrementTimer() {
    while (yield put(incrCounter())) {
        yield call(delay, 1000);
    }
}

export function* watchIncrementTimer() {

    while (yield take(CounterActionTypes.START_INCREMENT_TIMER)) {

        const autoIncrFork = yield fork(incrementTimer);

        yield take(CounterActionTypes.END_INCREMENT_TIMER);

        yield cancel(autoIncrFork);

    }
}
