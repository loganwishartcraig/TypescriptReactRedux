import { delay } from 'redux-saga';
import { takeEvery, put, call, ForkEffect, CallEffect, PutEffect } from 'redux-saga/effects';
import { incrCounter, CounterActionTypes, CounterActions } from '../actionCreators/counter';

export function* helloSaga(): IterableIterator<void> {
    console.log('Hello Sagas!');
}

export function* incrementAsync(): IterableIterator<CallEffect | PutEffect<CounterActions.Increment>> {
    yield call(delay, 1000);
    yield put(incrCounter());
}

export function* watchIncrementAsync(): IterableIterator<ForkEffect> {
    yield takeEvery(CounterActionTypes.INCREMENT_ASYNC, incrementAsync);
}
