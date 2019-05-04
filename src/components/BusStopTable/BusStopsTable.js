import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import { connect } from 'react-redux';
import { getBusStops } from '../../actions';


class DatatablePage extends Component  {

    componentDidMount() {
        const { getBusStops } = this.props;
        getBusStops(100);
    }
   
    render() {
        const { busStops } = this.props;
        const busStopsRelevanCols = busStops.map(({ daytype, location, month_beginning, ...busStops }) => busStops)
        const data = {
            columns: [
                {
                    label: 'Stop ID',
                    field: 'stop_id',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'On Street',
                    field: 'on_street',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Cross Street',
                    field: 'cross_street',
                    sort: 'asc',
                    width: 50
                },
                {
                    label: 'Routes',
                    field: 'routes',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Boardings',
                    field: 'boardings',
                    sort: 'asc',
                    width: 50
                },
                {
                    label: 'Alightings',
                    field: 'alightings',
                    sort: 'asc',
                    width: 100
                }
            ],
            rows: busStopsRelevanCols

        };
        return (
            <MDBDataTable
                striped
                bordered
                data={data}
            />
        )
    }
 };

export const mapStateToProps = ({ busData: { list, hasLoadedPeople } }) => ({
    hasLoadedPeople,
    busStops: list
});

export const mapDispatchToProps = {
    getBusStops: getBusStops.request,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DatatablePage);