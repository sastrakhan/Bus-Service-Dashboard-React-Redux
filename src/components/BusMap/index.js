import { connect } from 'react-redux';
import BusMap, { mapStateToProps } from './BusMap';

export default connect(
    mapStateToProps,
)(BusMap);