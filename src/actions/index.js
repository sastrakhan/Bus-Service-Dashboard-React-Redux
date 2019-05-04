import { createRoutine } from 'redux-saga-routines';

export const GET_BUSSTOPS = 'GET_BUSSTOPS';
export const GET_STOPS_MOST_ROUTES = 'GET_STOPS_MOST_ROUTES';
export const GET_ROUTES_MOST_STOPS = 'GET_ROUTES_MOST_STOPS';

export const getBusStops = createRoutine(GET_BUSSTOPS);
export const getStopsWithMostRoutes = createRoutine(GET_STOPS_MOST_ROUTES);
export const getRoutesWithMostStops = createRoutine(GET_ROUTES_MOST_STOPS);

