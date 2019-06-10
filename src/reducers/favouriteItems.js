import { handleAction, handleActions } from 'redux-actions'

import { addToFavourite, removeFromFavourite, setFilter } from '../actions'
import { combineReducers } from 'redux'

const favouriteItems = handleActions(
  {
    [addToFavourite]: (state, { payload }) => {
      return [...state, payload]
    },
    [removeFromFavourite]: (state, { payload }) => {
      return state.filter(item => item.woeid !== payload)
    },
  },
  [],
)

const activeFilter = handleAction(
  setFilter,
  (state, { payload }) => {
    return payload
  },
  '',
)

const favourite = combineReducers({
  favouriteItems,
  activeFilter
})

export default favourite
