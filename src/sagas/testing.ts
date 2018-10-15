import { delay, SagaIterator } from 'redux-saga';
import { takeEvery, put, all, ForkEffect } from 'redux-saga/effects';
import { incrCounter, CounterActionTypes } from '../actionCreators/counter';

export function* helloSaga(): IterableIterator<void> {
    console.log('Hello Sagas!');
}

export type IncrementAsyncSaga = (
    Promise<true> |
    SagaIterator
);

export function* incrementAsync() {
    yield delay(1000);
    yield put(incrCounter());
}

export function* watchIncrementAsync(): IterableIterator<ForkEffect> {
    yield takeEvery(CounterActionTypes.INCREMENT_ASYNC, incrementAsync);
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ]);
}
