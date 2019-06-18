import { takeEvery, put, call, select, all } from 'redux-saga/effects'
import {
  fetchWeather,
  setWeatherLoading,
  setWeatherErrored,
  setWeatherData,
} from '../actions'
import { getWeatherQuery } from '../selectors'
import { getWeatherData } from '../managers'

function* fetchWeatherAsync() {
  try {
    yield put(setWeatherLoading(true))
    const query = yield select(getWeatherQuery)
    const data = yield call(getWeatherData, query)
    yield put(setWeatherLoading(false))
    yield put(setWeatherData(data))
  } catch (error) {
    yield put(setWeatherErrored(true))
  }
}

const weatherSaga = function*() {
  yield all([
    takeEvery(fetchWeather, fetchWeatherAsync)
  ])
}

export default weatherSaga