import { takeEvery, put, call, select } from 'redux-saga/effects'
import {
  fetchWeather,
  weatherIsLoading,
  weatherHasErrored,
  weatherFetchDataSuccess,
} from '../actions'
import { getWeatherQuery } from '../selectors'
import { GetWeatherData } from '../managers'

export function* watchFetchCity() {
  yield takeEvery(fetchWeather, fetchCityAsync)
}

function* fetchCityAsync() {
  try {
    yield put(weatherIsLoading(true))
    const query = yield select(getWeatherQuery)
    const data = yield call(() => {
      return GetWeatherData(query)
    })
    yield put(weatherIsLoading(false))
    yield put(weatherFetchDataSuccess(data))
  } catch (error) {
    yield put(weatherHasErrored(true))
  }
}
