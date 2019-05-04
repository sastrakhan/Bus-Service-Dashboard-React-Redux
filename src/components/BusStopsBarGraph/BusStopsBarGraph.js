import React, { Component } from 'react';
import Loading from 'react-loading';
import './BusStopsBarGraph.css';
import {
    XYPlot,
    XAxis,
    YAxis,
    ChartLabel,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    LabelSeries
} from 'react-vis';

import Panel from '../Panel';
import { getStopsWithMostRoutes } from '../../actions';



class BusStopBarGraph extends Component {
    componentDidMount() {
        const { fetchStopsMostRoutes } = this.props;
        fetchStopsMostRoutes(10);
    }

    createLabel(crossStreet, id) {
        let label = `(${id})${crossStreet}`
        return label.substring(0, 12);
    }

    render() {
        const { people } = this.props;
        let chartData = [];
        people.map((busStop, index) => (
            chartData.push({ x: this.createLabel(busStop.cross_street, busStop.stop_id), y: busStop.boardings, label: busStop.boardings.toString() })
        ));
        chartData = chartData.splice(0, 4);

        return (
            <div className="grid-item">
                <Panel size="lg">
                    <div>
                        <XYPlot xType="ordinal" width={700} height={300}>
                            <VerticalGridLines />
                            <HorizontalGridLines />
                            <XAxis />
                            <YAxis />
                            <ChartLabel
                                text="Stops with Most Routes"
                                className="alt-x-label"
                                xPercent={0.52}
                            />
                            <VerticalBarSeries data={chartData} />
                            <LabelSeries data={chartData} getLabel={d => d.label} />
                        </XYPlot>
                    </div>
                </Panel>
            </div>
        );
    }
}

export const mapStateToProps = ({ busData: { freqStops, hasLoadedPeople } }) => ({
    people: freqStops,
    hasLoadedPeople,
});

export const mapDispatchToProps = {
    fetchStopsMostRoutes: getStopsWithMostRoutes.request,
};

export default BusStopBarGraph;
