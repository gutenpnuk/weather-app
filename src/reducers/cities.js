import { handleAction } from 'redux-actions'
import { combineReducers } from 'redux'
import {
  fetchCities,
  setCitiesLoading,
  setCitiesErrored,
  setCitiesList,
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

const cities = combineReducers({
  isLoading,
  hasErrored,
  all,
  query,
})

export default cities
