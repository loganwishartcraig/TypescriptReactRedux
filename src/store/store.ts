import {createStore, Store} from 'redux';
import reducer, { AppState } from '../reducers/reducer';
import { AppActions } from '../actionCreators';

const store: Store<AppState, AppActions> = createStore(reducer);

export default store;
