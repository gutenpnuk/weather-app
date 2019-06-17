import { takeLatest, put, call, select } from 'redux-saga/effects'
import {
  fetchCities,
  setCitiesErrored,
  setCitiesLoading,
  citiesFetchDataSuccess,
} from '../actions'
import { getCitiesQuery } from '../selectors'
import { getCitiesList } from '../managers'

export function* watchFetchCities() {
  yield takeLatest(fetchCities, fetchCitiesAsync)
}

function* fetchCitiesAsync() {
  try {
    yield put(setCitiesErrored(false))
    yield put(setCitiesLoading(true))
    const query = yield select(getCitiesQuery)
    if (!query) {
      yield put(setCitiesLoading(false))
      yield put(citiesFetchDataSuccess([]))
    } else {
      const data = yield call(() => {
        return getCitiesList(query)
      })
      yield put(setCitiesLoading(false))
      yield put(citiesFetchDataSuccess(data))
    }
  } catch (error) {
    yield put(setCitiesErrored(true))
  }
}
