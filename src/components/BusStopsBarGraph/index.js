import { connect } from 'react-redux';
import BusStopBarGraph, { mapStateToProps, mapDispatchToProps } from './BusStopsBarGraph';

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BusStopBarGraph);