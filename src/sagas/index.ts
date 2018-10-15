import { all } from 'redux-saga/effects';
import { helloSaga, watchIncrementAsync } from './incrementAsync';

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ]);
}
