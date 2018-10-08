import { MapDispatchToProps, connect } from 'react-redux';
import Controls, { ControlsProps } from '../../components/Controls/Controls';
import { incrCounter, decrCounter } from '../../actionCreators/counter';

const mapDispatchToProps: MapDispatchToProps<ControlsProps, {}> = (dispatch) => ({
    onIncrClick: () => dispatch(incrCounter()),
    onDecrClick: () => dispatch(decrCounter())
});

const CounterControls = connect(undefined, mapDispatchToProps)(Controls);

export default CounterControls;
