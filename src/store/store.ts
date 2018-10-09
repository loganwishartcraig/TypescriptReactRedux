import { createStore, Store } from 'redux';
import { AppActions } from '../actionCreators/types';
import reducer, { AppState } from '../reducers/reducer';

const store: Store<AppState, AppActions> = createStore(reducer);

export default store;
