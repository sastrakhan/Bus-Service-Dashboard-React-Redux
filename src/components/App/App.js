import React from 'react';

import './App.css';

import Header from '../Header';
import BusStops from '../BusStopsBarGraph';
import BusMap from '../BusMap';
import DatatablePage from '../BusStopTable/BusStopsTable'
import RouteTable from '../RouteTable/RouteTable'

const App = () => (
    <div className="busstop-app">
    <Header />
    <div className="grid-container">
            <RouteTable />
            <BusStops />
            <BusMap />
            <DatatablePage />
    </div>
  </div>
);

export default App;
