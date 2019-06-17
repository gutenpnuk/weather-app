import { watchFetchCities } from './cities'
import { watchFetchWeather } from './weather'
import { initialSaga, watchAddedFavourite, watchRemovedFavourite } from './favourites'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([
    watchFetchWeather(),
    watchFetchCities(),
    initialSaga(),
    watchAddedFavourite(),
    watchRemovedFavourite(),
  ])
}
