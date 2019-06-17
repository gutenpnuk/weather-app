import { takeEvery, put, call, select } from 'redux-saga/effects'
import {
  fetchWeather,
  setWeatherLoading,
  setWeatherErrored,
  weatherFetchDataSuccess,
} from '../actions'
import { getWeatherQuery } from '../selectors'
import { getWeatherData } from '../managers'

export function* watchFetchWeather() {
  yield takeEvery(fetchWeather, fetchWeatherAsync)
}

function* fetchWeatherAsync() {
  try {
    yield put(setWeatherLoading(true))
    const query = yield select(getWeatherQuery)
    const data = yield call(() => {
      return getWeatherData(query)
    })
    yield put(setWeatherLoading(false))
    yield put(weatherFetchDataSuccess(data))
  } catch (error) {
    yield put(setWeatherErrored(true))
  }
}
