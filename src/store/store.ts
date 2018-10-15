import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { AppActions } from '../actionCreators/types';
import reducer, { AppState } from '../reducers/reducer';
import rootSaga from '../sagas/testing';

const sagaMiddleware: SagaMiddleware<{}> = createSagaMiddleware();

const store: Store<AppState, AppActions> = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
