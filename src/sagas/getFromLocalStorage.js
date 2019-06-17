import { getFavourite } from '../repositories'
import { call, put } from 'redux-saga/effects'
import {
  getFavourites,
  favouriteHasErrored,
  favouriteIsLoading,
} from '../actions'

export function* getFromLocalStorage() {
  try {
    yield put(favouriteIsLoading(true))
    const data = yield call(() => {
      return getFavourite()
    })
    yield put(favouriteIsLoading(false))
    yield put(getFavourites(data))
  } catch (error) {
    yield put(favouriteHasErrored(true))
  }
}
