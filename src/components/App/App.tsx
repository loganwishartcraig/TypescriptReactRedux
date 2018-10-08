import * as React from 'react';
import LiveCount from '../../containers/LiveCount/LiveCount';
import CounterControls from '../../containers/CounterControls/CounterControls';
// import Counter from '../Counter/Counter';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <p>Test</p>
                <p>The app is at <LiveCount/></p>
                <CounterControls />
            </div>
        );
    }
}
