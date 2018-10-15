import { MapDispatchToProps, connect } from 'react-redux';
import Controls, { ControlsProps } from '../../components/Controls/Controls';
import { incrCounter, decrCounter, incrCounterAsync } from '../../actionCreators/counter';
import { Dispatch } from 'redux';

const mapDispatchToProps: MapDispatchToProps<ControlsProps, {}> = (dispatch: Dispatch) => ({
    onIncrClick: () => dispatch(incrCounter()),
    onDecrClick: () => dispatch(decrCounter()),
    onAsyncIncrClick: () => dispatch(incrCounterAsync())
});

const CounterControls = connect(undefined, mapDispatchToProps)(Controls);

export default CounterControls;
