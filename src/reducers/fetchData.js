import { handleAction } from 'redux-actions'
import {
  fetchData,
  itemsIsLoading,
  itemsHasErrored,
  itemsFetchDataSuccess,
} from '../actions'
import { combineReducers } from 'redux'

const isLoading = handleAction(
  itemsIsLoading,
  (state, { payload }) => {
    return payload
  },
  false,
)

const hasErrored = handleAction(
  itemsHasErrored,
  (state, { payload }) => {
    return payload
  },
  false,
)

const items = handleAction(
  itemsFetchDataSuccess,
  (state, { payload }) => {
    return payload
  },
  [],
)

const query = handleAction(
  fetchData,
  (state, { payload }) => {
    return payload
  },
  '',
)

const itemsFetchData = combineReducers({
  isLoading,
  hasErrored,
  items,
  query,
})

export default itemsFetchData
