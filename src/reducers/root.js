import { combineReducers } from 'redux'
import cities from './cities'
import weather from './weather'

const rootReducer = combineReducers({
  cities,
  weather,
})

export default rootReducer
