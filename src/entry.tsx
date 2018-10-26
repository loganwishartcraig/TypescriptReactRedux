import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/App/App';
import { Provider } from 'react-redux';
import store from './store/store';
import AppRouter from './components/AppRouter/AppRouter';

ReactDOM.render(
    <Provider store={store}>
        {/* <App /> */}
        <AppRouter />
    </Provider>,
    document.getElementById('app-root')
);
