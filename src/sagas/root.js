import { watchFetchData } from './fetchCitiesList'
import { watchFetchCity } from './fetchCityWeather'
import { getFromLocalStorage } from './getFromLocalStorage'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([watchFetchCity(), watchFetchData(), getFromLocalStorage()])
}
