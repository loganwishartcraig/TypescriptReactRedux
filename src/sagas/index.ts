import { all } from 'redux-saga/effects';
import { watchIncrementAsync, watchIncrementTimer, watchDecrementTimer } from './increment';

export default function* rootSaga() {
    yield all([
        watchIncrementAsync(),
        watchIncrementTimer(),
        watchDecrementTimer()
    ]);
}
