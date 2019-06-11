import { getFavourite } from '../repositories'
import { call, put, delay } from 'redux-saga/effects'
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
    yield delay(2000)
    yield put(favouriteIsLoading(false))
    yield put(getFavourites(data))
  } catch (error) {
    yield put(favouriteHasErrored(true))
  }
}
