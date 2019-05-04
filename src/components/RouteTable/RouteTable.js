import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRoutesWithMostStops } from '../../actions';
import Loading from 'react-loading';
import './RouteTable.css';
import Panel from '../Panel';

class RouteTable extends Component  {

    componentDidMount() {
        const { fetchRoutes } = this.props;
        fetchRoutes(5);
    }

    showUsers() {
        const { routes } = this.props;

        return routes.map(route => (
            <div key={route.RouteNumber} className="person">
                <h4> #{route.RouteNumber}</h4>
                <div className="bio">Total Stops:{route.TotalStops}</div>
            </div>
        ));
    }

    render() {
        const { hasLoadedPeople } = this.props;
        if (hasLoadedPeople === false) {
            return <Loading className="loading" color="#14233c" />;
        }
        return (
            <div className="grid-item">
                <Panel size="lg">
                    <center><h3>Routes with most Stops</h3></center>
                    <div className="people-list">{this.showUsers()}</div>
                </Panel>
            </div>
        );
    }
 };

export const mapStateToProps = ({ busData: { routesList, hasLoadedPeople } }) => ({
    routes: routesList,
    hasLoadedPeople,
});

export const mapDispatchToProps = {
    fetchRoutes: getRoutesWithMostStops.request,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RouteTable);
