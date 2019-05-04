import { call, put, takeEvery } from 'redux-saga/effects';

import API from '../services/api';
import { getBusStops, getStopsWithMostRoutes, getRoutesWithMostStops } from '../actions';

export function* callButStopService(amount) {
    return yield call(API.getBusStops, amount);
}

export function* callStopMostRoutesService(amount) {
    return yield call(API.getStopsWithMostRoutes, amount);
}

export function* callRoutesMostStopsService(amount) {
    return yield call(API.getRoutesWithMostStops, amount);
}

export function* getBusStopsRequest(actionInput) {
  try {
    const { data } = yield call(callButStopService, actionInput.payload);
    yield put(
       getBusStops.success({
        busstops: data,
      }),
    );
  } catch (error) {
      yield put(getBusStops.failure(error.message));
  }
}

export function* getStopsWithMostRoutesRequest(actionInput) {
    try {
        const { data } = yield call(callStopMostRoutesService, actionInput.payload);
        yield put(
            getStopsWithMostRoutes.success({
                freqStops: data,
            }),
        );
    } catch (error) {
        yield put(getStopsWithMostRoutes.failure(error.message));
    }
}

export function* getRoutesWithMostStopsRequest(actionInput) {
    try {
        const { data } = yield call(callRoutesMostStopsService, actionInput.payload);
        yield put(
            getRoutesWithMostStops.success({
                routes: data,
            }),
        );
    } catch (error) {
        yield put(getRoutesWithMostStops.failure(error.message));
    }
}

export default function* peopleSaga() {
    yield takeEvery(getBusStops.REQUEST, getBusStopsRequest);
    yield takeEvery(getStopsWithMostRoutes.REQUEST, getStopsWithMostRoutesRequest);
    yield takeEvery(getRoutesWithMostStops.REQUEST, getRoutesWithMostStopsRequest);
}
