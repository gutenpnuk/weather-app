import { takeLatest, put, call, select } from 'redux-saga/effects'

import {
  fetchData,
  itemsHasErrored,
  itemsIsLoading,
  itemsFetchDataSuccess,
} from '../actions'

import { getQuery } from '../selectors'

import { getCitiesList } from '../managers'

export function* watchFetchData() {
  yield takeLatest(fetchData, fetchDataAsync)
}

function* fetchDataAsync() {
  try {
    yield put(itemsHasErrored(false))
    yield put(itemsIsLoading(true))
    const query = yield select(getQuery)
    const data = yield call(() => {
      return getCitiesList(query)
    })
    yield put(itemsIsLoading(false))
    yield put(itemsFetchDataSuccess(data))
  } catch (error) {
    yield put(itemsHasErrored(true))
  }
}
