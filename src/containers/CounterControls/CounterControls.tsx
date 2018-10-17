import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { Dispatch } from 'redux';
import { decrCounter, endIncrementTimer, incrCounter, incrCounterAsync, startIncrementTimer, startDecrementTimer, endDecrementTimer } from '../../actionCreators/counter';
import Controls, { DispatchProps, StateProps } from '../../components/Controls/Controls';
import { AppState } from '../../reducers/reducer';

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (dispatch: Dispatch) => ({
    onIncrClick: () => dispatch(incrCounter()),
    onDecrClick: () => dispatch(decrCounter()),
    onAsyncIncrClick: () => dispatch(incrCounterAsync()),
    onStartAutoIncrClick: () => dispatch(startIncrementTimer()),
    onStopAutoIncrClick: () => dispatch(endIncrementTimer()),
    onStartAutoDecrClick: () => dispatch(startDecrementTimer()),
    onStopAutoDecrClick: () => dispatch(endDecrementTimer())
});

const mapStateToProps: MapStateToProps<StateProps, {}, AppState> = state => ({
    isAutoIncrementing: state.count.autoIncrementing,
    isAutoDecrementing: state.count.autoDecrementing
});

const CounterControls = connect(mapStateToProps, mapDispatchToProps)(Controls);

export default CounterControls;
