import { handleAction, handleActions } from 'redux-actions'
import { combineReducers } from 'redux'
import {
  fetchCities,
  setCitiesLoading,
  setCitiesErrored,
  setCitiesList,
  addToFavourite,
  removeFromFavourite,
  setFilter,
  getFavourites,
  setFavouriteLoading,
  setFavouriteErrored,
} from '../actions'
import * as R from 'ramda'

const isLoading = handleAction(
  setCitiesLoading,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  false,
)

const hasErrored = handleAction(
  setCitiesErrored,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  false,
)

const all = handleAction(
  setCitiesList,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  [],
)

const query = handleAction(
  fetchCities,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  '',
)

const favourites = handleActions(
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

const cities = combineReducers({
  isLoading,
  hasErrored,
  all,
  query,
  favourites,
  activeFilter,
  isFavouriteLoading,
  hasFavouriteErrored,
})

export default cities
