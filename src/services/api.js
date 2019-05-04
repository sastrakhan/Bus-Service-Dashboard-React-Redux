import axios from 'axios';

const GET_BUSSTOPS_ENDPOINT = `http://localhost:50606/BusStops?$top=`;
const GET_STOPS_MOST_ROUTES = `http://127.0.0.1:8000/busstopmostroutes/`;
const GET_ROUTES_WITH_STOPS = `http://127.0.0.1:8000/routeswithmoststops/`;

//OData API
//const GET_STOPS_MOST_ROUTES = `http://localhost:50606/GetStopsWithMostRoutes?amount=`;
//const GET_ROUTES_WITH_STOPS = `http://localhost:50606/GetRoutesByStops?amount=`;

class API {
    constructor(api) {
        this.api = api;
    }

    getBusStops = (amount) => {
        return this.api.get(GET_BUSSTOPS_ENDPOINT + amount);
    };

    getRoutesWithMostStops = (amount) => {
        return this.api.get(GET_ROUTES_WITH_STOPS);
    };

    getStopsWithMostRoutes = (amount) => {
        return this.api.get(GET_STOPS_MOST_ROUTES);
    };
}

export default new API(axios);
