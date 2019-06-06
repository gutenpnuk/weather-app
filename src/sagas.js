import { takeEvery, put, call, select } from 'redux-saga/effects'

import {
  fetchData,
  itemsHasErrored,
  itemsIsLoading,
  itemsFetchDataSuccess,
  fetchCity,
  cityIsLoading,
  cityHasErrored,
  cityFetchDataSuccess
} from './actions'

export function* watchFetchData() {
  yield takeEvery(fetchData, fetchDataAsync)
}

const getQuery = state => state.Query

function* fetchDataAsync() {
  try {
    yield put(itemsIsLoading(true))
    const query = yield select(getQuery)
    const data = yield call(() => {
      return fetch(
        `api/location/search/?query=${query}`,
      ).then(res => res.json())
    })
    yield put(itemsIsLoading(false))
    yield put(itemsFetchDataSuccess(data))
  } catch (error) {
    yield put(itemsHasErrored(true))
  }
}

export function* watchFetchCity() {
  yield takeEvery(fetchCity, fetchCityAsync)
}

const getCity = state => state.cityToFetch

function* fetchCityAsync() {
  try {
    yield put(cityIsLoading(true))
    const query = yield select(getCity)
    const data = yield call(() => {
      return fetch(
        `api/location/${query}/`,
      ).then(res => res.json())
    })
    yield put(cityIsLoading(false))
    console.log(data)
    yield put(cityFetchDataSuccess(data))
  } catch (error) {
    yield put(cityHasErrored(true))
  }
}