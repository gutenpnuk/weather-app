import {
  getFavourite,
  addToLocalFavourite,
  removeFromLocalFavourite,
} from '../repositories'
import { call, put, takeEvery, all } from 'redux-saga/effects'
import {
  getFavourites,
  setFavouriteErrored,
  setFavouriteLoading,
  addToFavourite,
  removeFromFavourite,
} from '../actions'

function* initialSaga() {
  try {
    yield put(setFavouriteLoading(true))
    const data = yield call(getFavourite)
    yield put(setFavouriteLoading(false))
    yield put(getFavourites(data))
  } catch (error) {
    yield put(setFavouriteErrored(true))
  }
}

function* addLocalFavourites({ payload }) {
  yield call(addToLocalFavourite, payload)
}

function* removeLocalFavourites({ payload }) {
  yield call(removeFromLocalFavourite, payload)
}

const favouritesSaga = function*() {
  yield all([
    initialSaga(),
    takeEvery(addToFavourite, addLocalFavourites),
    takeEvery(removeFromFavourite, removeLocalFavourites),
  ])
}

export default favouritesSaga
