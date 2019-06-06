import { combineReducers } from 'redux'
import { isLoading, hasErrored, items, favouriteItems, activeFilter } from './fetchData'
import { Query } from './request'
import { isCityLoading, hasCityErrored, city, cityToFetch } from './fetchCity'

const rootReducer = combineReducers({
  isLoading,
  hasErrored,
  items,
  Query,
  favouriteItems,
  isCityLoading,
  hasCityErrored,
  city,
  cityToFetch,
  activeFilter,
})

export default rootReducer
