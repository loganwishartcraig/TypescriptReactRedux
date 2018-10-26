// import * from 'react';
import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from '../App/App';

export const enum AppRoutes {
    ROOT = '/',
    ABOUT = '/about'
}

const AppRouter: React.SFC = () => (
    <Router>
        <div>
            <Route path={AppRoutes.ROOT} exact component={App}></Route>
            <Route path={AppRoutes.ABOUT} component={About}></Route>
        </div>
    </Router>
);

const About: React.SFC = () => (
    <Link to={'/'}>Home</Link>
);

export default AppRouter;
