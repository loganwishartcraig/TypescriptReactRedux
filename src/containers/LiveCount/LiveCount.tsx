import { connect, MapStateToProps } from 'react-redux';
import Count, { CountProps } from '../../components/Count/Count';
import { AppState } from '../../reducers/reducer';

const mapStateToProps: MapStateToProps<CountProps, undefined, AppState> = ({ count }) => ({
    count
});

const LiveCount = connect(mapStateToProps)(Count);

export default LiveCount;
