import { handleAction, handleActions } from 'redux-actions'
import { combineReducers } from 'redux'
import {
  fetchCities,
  citiesIsLoading,
  citiesHasErrored,
  citiesFetchDataSuccess,
  addToFavourite,
  removeFromFavourite,
  setFilter,
  getFavourites,
  favouriteIsLoading,
  favouriteHasErrored,
} from '../actions'

const isLoading = handleAction(
  citiesIsLoading,
  (state, { payload }) => {
    return payload
  },
  false,
)

const hasErrored = handleAction(
  citiesHasErrored,
  (state, { payload }) => {
    return payload
  },
  false,
)

const citiesList = handleAction(
  citiesFetchDataSuccess,
  (state, { payload }) => {
    return payload
  },
  [],
)

const query = handleAction(
  fetchCities,
  (state, { payload }) => {
    return payload
  },
  '',
)

const favouriteCitiesList = handleActions(
  {
    [addToFavourite]: (state, { payload }) => {
      return [...state, payload]
    },
    [removeFromFavourite]: (state, { payload }) => {
      return state.filter(item => item.woeid !== payload)
    },
    [getFavourites]: (state, { payload }) => {
      return payload
    },
  },
  [],
)

const isFavouriteLoading = handleAction(
  favouriteIsLoading,
  (state, { payload }) => {
    return payload
  },
  false,
)

const hasFavouriteErrored = handleAction(
  favouriteHasErrored,
  (state, { payload }) => {
    return payload
  },
  false,
)

const activeFilter = handleAction(
  setFilter,
  (state, { payload }) => {
    return payload
  },
  '',
)

const cities = combineReducers({
  isLoading,
  hasErrored,
  citiesList,
  query,
  favouriteCitiesList,
  activeFilter,
  isFavouriteLoading,
  hasFavouriteErrored,
})

export default cities
