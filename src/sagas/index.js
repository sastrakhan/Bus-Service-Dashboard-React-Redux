import { fork } from 'redux-saga/effects';

import busInfoSaga from './busInfo';

function* rootSaga() {
  yield fork(busInfoSaga);
}

export default rootSaga;
