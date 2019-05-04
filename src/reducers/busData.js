import { handleActions } from 'redux-actions';

import { getBusStops, getStopsWithMostRoutes, getRoutesWithMostStops } from '../actions';

const INITIAL_STATE = {
    hasLoadedPeople: false,
    errorGettingPeople: false,
    amountRequested: 0,
    list: [],
    routesList: [],
    freqStops: []
};

const busData = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case getBusStops.REQUEST:
            return {
                ...state,
                amountRequested: payload,
                list: [],
                hasLoadedPeople: false,
                errorGettingPeople: false,
            };
        case getBusStops.FAILURE:
            return {
                ...state,
                errorGettingPeople: true,
            };
        case getBusStops.SUCCESS:
            return {
                ...state,
                hasLoadedPeople: true,
                list: payload.busstops,
            };
        case getStopsWithMostRoutes.REQUEST:
            return {
                ...state,
                amountRequested: payload,
                freqStops: [],
                hasLoadedPeople: false,
                errorGettingPeople: false,
            };
        case getStopsWithMostRoutes.FAILURE:
            return {
                ...state,
                errorGettingPeople: true,
            };
        case getStopsWithMostRoutes.SUCCESS:
            return {
                ...state,
                hasLoadedPeople: true,
                freqStops: payload.freqStops,
            };
        case getRoutesWithMostStops.REQUEST:
            return {
                ...state,
                amountRequested: payload,
                RoutesList: [],
                hasLoadedPeople: false,
                errorGettingPeople: false,
            };
        case getRoutesWithMostStops.FAILURE:
            return {
                ...state,
                errorGettingPeople: true,
            };
        case getRoutesWithMostStops.SUCCESS:
            return {
                ...state,
                hasLoadedPeople: true,
                routesList: payload.routes,
            };
        default:
            return state;
    }
};

export default busData;
