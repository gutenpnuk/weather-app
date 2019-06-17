import { handleAction, handleActions } from 'redux-actions'
import { combineReducers } from 'redux'
import {
  fetchCities,
  setCitiesLoading,
  setCitiesErrored,
  citiesFetchDataSuccess,
  addToFavourite,
  removeFromFavourite,
  setFilter,
  getFavourites,
  setFavouriteLoading,
  setFavouriteErrored,
} from '../actions'

const isLoading = handleAction(
  setCitiesLoading,
  (state, { payload }) => {
    return payload
  },
  false,
)

const hasErrored = handleAction(
  setCitiesErrored,
  (state, { payload }) => {
    return payload
  },
  false,
)

const all = handleAction(
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

const favourites = handleActions(
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
  setFavouriteLoading,
  (state, { payload }) => {
    return payload
  },
  false,
)

const hasFavouriteErrored = handleAction(
  setFavouriteErrored,
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
  all,
  query,
  favourites,
  activeFilter,
  isFavouriteLoading,
  hasFavouriteErrored,
})

export default cities
