import { handleAction, handleActions } from 'redux-actions'
import {
  itemsIsLoading,
  itemsHasErrored,
  itemsFetchDataSuccess,
  addToFavourite,
  removeFromFavourite,
  setFilter,
} from '../actions'

export const isLoading = handleAction(
  itemsIsLoading,
  (state, { payload }) => {
    return payload
  },
  false,
)

export const hasErrored = handleAction(
  itemsHasErrored,
  (state, { payload }) => {
    return payload
  },
  false,
)

export const items = handleAction(
  itemsFetchDataSuccess,
  (state, { payload }) => {
    return payload
  },
  [],
)

export const favouriteItems = handleActions(
  {
    [addToFavourite]: (state, { payload }) => {
      return [
        ...state,
        payload
      ]
    },
    [removeFromFavourite]: (state, { payload }) => {
      return state.filter(item => item.woeid !== payload)
    },
  },
  [],
)

export const activeFilter = handleAction(
  setFilter,
  (state, {payload}) => {
    return payload
  },
  '',
)