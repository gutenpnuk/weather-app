import { takeLatest, put, call, select } from 'redux-saga/effects'
import {
  fetchCities,
  citiesHasErrored,
  citiesIsLoading,
  citiesFetchDataSuccess,
} from '../actions'
import { getCitiesQuery } from '../selectors'
import { getCitiesList } from '../managers'

export function* watchFetchData() {
  yield takeLatest(fetchCities, fetchDataAsync)
}

function* fetchDataAsync() {
  try {
    yield put(citiesHasErrored(false))
    yield put(citiesIsLoading(true))
    const query = yield select(getCitiesQuery)
    if (!query) {
      yield put(citiesIsLoading(false))
      yield put(citiesFetchDataSuccess([]))
    } else {
      const data = yield call(() => {
        return getCitiesList(query)
      })
      yield put(citiesIsLoading(false))
      yield put(citiesFetchDataSuccess(data))
    }
  } catch (error) {
    yield put(citiesHasErrored(true))
  }
}
