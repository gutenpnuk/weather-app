import { handleAction, handleActions } from 'redux-actions'
import { combineReducers } from 'redux'
import {
  addToFavourite,
  removeFromFavourite,
  setFilter,
  getFavourites,
  setFavouriteLoading,
  setFavouriteErrored,
} from '../actions'
import * as R from 'ramda'

const all = handleActions(
  {
    [addToFavourite]: (state, { payload }) => R.append(payload, state),
    [removeFromFavourite]: (state, { payload }) =>
      R.reject(
        R.pipe(
          R.prop('woeid'),
          R.equals(payload),
        ),
      )(state),
    [getFavourites]: R.pipe(
      R.nthArg(1),
      R.prop('payload'),
    ),
  },
  [],
)

const isFavouriteLoading = handleAction(
  setFavouriteLoading,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  false,
)

const hasFavouriteErrored = handleAction(
  setFavouriteErrored,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  false,
)

const activeFilter = handleAction(
  setFilter,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  '',
)

const favourites = combineReducers({
  all,
  activeFilter,
  isFavouriteLoading,
  hasFavouriteErrored,
})

export default favourites
