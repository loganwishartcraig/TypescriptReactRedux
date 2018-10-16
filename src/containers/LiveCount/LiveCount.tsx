import { connect, MapStateToProps } from 'react-redux';
import Count, { CountProps } from '../../components/Count/Count';
import { AppState } from '../../reducers/reducer';

const mapStateToProps: MapStateToProps<CountProps, {}, AppState> = ({ count: { value, autoDecrementing, autoIncrementing } }) => ({
    value,
    autoDecrementing,
    autoIncrementing
});

const LiveCount = connect(mapStateToProps)(Count);

export default LiveCount;
