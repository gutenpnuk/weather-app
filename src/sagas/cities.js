import { takeLatest, put, call, select, all } from 'redux-saga/effects'
import {
  fetchCities,
  setCitiesErrored,
  setCitiesLoading,
  setCitiesList,
} from '../actions'
import { getCitiesQuery } from '../selectors'
import { getCitiesList } from '../managers'

function* fetchCitiesAsync() {
  try {
    yield put(setCitiesErrored(false))
    yield put(setCitiesLoading(true))
    const query = yield select(getCitiesQuery)
    if (!query) {
      yield put(setCitiesLoading(false))
      yield put(setCitiesList([]))
    } else {
      const data = yield call(getCitiesList, query)
      yield put(setCitiesLoading(false))
      yield put(setCitiesList(data))
    }
  } catch (error) {
    yield put(setCitiesErrored(true))
  }
}

const citiesSaga = function*() {
  yield all([
    takeLatest(fetchCities, fetchCitiesAsync)
  ])
}

export default citiesSaga
