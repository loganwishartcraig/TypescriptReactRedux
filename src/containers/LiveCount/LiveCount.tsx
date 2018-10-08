import { connect, MapStateToProps } from 'react-redux';
import Count, { CountProps } from '../../components/Count/Count';
import { AppState } from '../../reducers/reducer';

const mapStateToProps: MapStateToProps<CountProps, {}, AppState> = (state: AppState) => ({
    count: state.count
});

const LiveCount = connect(mapStateToProps)(Count);

export default LiveCount;
