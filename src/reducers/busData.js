import { handleActions } from 'redux-actions';

import { getBusStops, getStopsWithMostRoutes, getRoutesWithMostStops } from '../actions';

const INITIAL_STATE = {
    hasLoadedbusInfo: false,
    errorGettingbusInfo: false,
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
                hasLoadedbusInfo: false,
                errorGettingbusInfo: false,
            };
        case getBusStops.FAILURE:
            return {
                ...state,
                errorGettingbusInfo: true,
            };
        case getBusStops.SUCCESS:
            return {
                ...state,
                hasLoadedbusInfo: true,
                list: payload.busstops,
            };
        case getStopsWithMostRoutes.REQUEST:
            return {
                ...state,
                amountRequested: payload,
                freqStops: [],
                hasLoadedbusInfo: false,
                errorGettingbusInfo: false,
            };
        case getStopsWithMostRoutes.FAILURE:
            return {
                ...state,
                errorGettingbusInfo: true,
            };
        case getStopsWithMostRoutes.SUCCESS:
            return {
                ...state,
                hasLoadedbusInfo: true,
                freqStops: payload.freqStops,
            };
        case getRoutesWithMostStops.REQUEST:
            return {
                ...state,
                amountRequested: payload,
                RoutesList: [],
                hasLoadedbusInfo: false,
                errorGettingbusInfo: false,
            };
        case getRoutesWithMostStops.FAILURE:
            return {
                ...state,
                errorGettingbusInfo: true,
            };
        case getRoutesWithMostStops.SUCCESS:
            return {
                ...state,
                hasLoadedbusInfo: true,
                routesList: payload.routes,
            };
        default:
            return state;
    }
};

export default busData;
