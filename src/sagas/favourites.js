import {
  getFavourite,
  addToLocalFavourite,
  removeFromLocalFavourite,
} from '../repositories'
import { call, put, takeEvery } from 'redux-saga/effects'
import {
  getFavourites,
  setFavouriteErrored,
  setFavouriteLoading,
  addToFavourite,
  removeFromFavourite,
} from '../actions'

export function* initialSaga() {
  try {
    yield put(setFavouriteLoading(true))
    const data = yield call(() => {
      return getFavourite()
    })
    yield put(setFavouriteLoading(false))
    yield put(getFavourites(data))
  } catch (error) {
    yield put(setFavouriteErrored(true))
  }
}

export function* watchAddedFavourite() {
  yield takeEvery(addToFavourite, addLocalFavourites)
}

export function* watchRemovedFavourite() {
  yield takeEvery(removeFromFavourite, removeLocalFavourites)
}

function* addLocalFavourites({ payload }) {
  yield addToLocalFavourite(payload)
}

function* removeLocalFavourites({ payload }) {
  yield removeFromLocalFavourite(payload)
}
