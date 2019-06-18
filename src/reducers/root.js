import { combineReducers } from 'redux'
import cities from './cities'
import weather from './weather'
import favourites from './favourites'

const rootReducer = combineReducers({
  cities,
  favourites,
  weather,
})

export default rootReducer
