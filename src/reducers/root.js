import { combineReducers } from 'redux'
import itemsFetchData from './fetchData'
import cityFetchData from './fetchCity'
import favourite from './favouriteItems'

const rootReducer = combineReducers({
  itemsFetchData,
  cityFetchData,
  favourite
})

export default rootReducer
