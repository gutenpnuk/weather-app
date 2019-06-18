import citiesSaga from './cities'
import weatherSaga from './weather'
import favouritesSaga from './favourites'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([citiesSaga(), weatherSaga(), favouritesSaga()])
}
