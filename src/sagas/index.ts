import { all } from 'redux-saga/effects';
import { watchIncrementAsync, watchIncrementTimer, watchDecrementTimer } from './incrementAsync';

export default function* rootSaga() {
    yield all([
        watchIncrementAsync(),
        watchIncrementTimer(),
        watchDecrementTimer()
    ]);
}
