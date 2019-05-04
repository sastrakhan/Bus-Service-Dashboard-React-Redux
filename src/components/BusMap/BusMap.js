import React, { Component } from 'react';
import Loading from 'react-loading';
import {
    shape, arrayOf, string, func, bool, number,
} from 'prop-types';

import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

import { getPeople } from '../../actions';
import Panel from '../Panel';


class BusMap extends Component {
    constructor() {
        super();

        this.state = {
            mapCenter: [0, 0]
        }
    }

    componentWillReceiveProps(nextProps) {
        const { busStops } = nextProps;
        //Ensure array has more than one value
        let middleStop = Math.ceil(busStops.length / 2) > 1 ? Math.ceil(busStops.length / 2) : 0;

        if (busStops.length) {
            this.setState({
                mapCenter: this.createLatLong(busStops[middleStop])
            });
        }
    }

    createLatLong(input) {

        let lat = input.location.split('(').pop().split(',')[0];
        let long = input.location.split(',').pop().split(')')[0];

        return [lat, long];
    }

    render() {
        const { busStops } = this.props;
        const { mapCenter } = this.state;

        const chartData = [];
        busStops.map((busStop, index) => (
            chartData.push({
                name: busStop.cross_street,
                position: this.createLatLong(busStop)
            })
        ));

        //const mapCenter = [chartData[0].latitude, chartData[0].longitude];
        const { hasLoadedPeople } = this.props;
        if (hasLoadedPeople === false) {
            return <Loading className="loading" color="#14233c" />;
        }

        const PigeonMarkers = chartData.map((marker, index) => (
            <Marker key={index} position={marker.position}>
                <Popup>
                    {marker.name}
                </Popup>
            </Marker>
        ));

        return (
            <div className="grid-item">
                    <LeafletMap
                        center={mapCenter}
                        zoom={13}
                        maxZoom={100}
                        attributionControl={true}
                        zoomControl={true}
                        doubleClickZoom={true}
                        scrollWheelZoom={true}
                        dragging={true}
                        animate={true}
                        easeLinearity={0.35}
                    >
                        <TileLayer
                            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        />
                        {PigeonMarkers}
                    </LeafletMap>
            </div>
        );
    }
}

export const mapStateToProps = ({ busData: { list, hasLoadedPeople } }) => {
    return {
        hasLoadedPeople,
        busStops: list
    };
};

export default BusMap;