import { takeEvery, put, call, select } from 'redux-saga/effects'

import {
  fetchCity,
  cityIsLoading,
  cityHasErrored,
  cityFetchDataSuccess,
} from '../actions'

import { getCityToFetch } from '../selectors'

import { getCityData } from '../managers'

export function* watchFetchCity() {
  yield takeEvery(fetchCity, fetchCityAsync)
}

function* fetchCityAsync() {
  try {
    yield put(cityIsLoading(true))
    const query = yield select(getCityToFetch)
    const data = yield call(() => {
      return getCityData(query)
    })
    yield put(cityIsLoading(false))
    yield put(cityFetchDataSuccess(data))
  } catch (error) {
    yield put(cityHasErrored(true))
  }
}
