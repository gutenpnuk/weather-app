import { watchFetchData } from './fetchCitiesList'
import {watchFetchCity} from './fetchCityWeather'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
    yield all([
        watchFetchCity(),
        watchFetchData()
    ])
}