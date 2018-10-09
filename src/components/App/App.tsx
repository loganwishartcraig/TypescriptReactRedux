import * as React from 'react';
import LiveCount from '../../containers/LiveCount/LiveCount';
import CounterControls from '../../containers/CounterControls/CounterControls';
import TextSetter from '../../containers/TextSetter/TextSetter';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <p>Test</p>
                <p>The app is at <LiveCount/></p>
                <CounterControls />
                <TextSetter />
            </div>
        );
    }
}
