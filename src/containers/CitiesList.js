import { connect } from 'react-redux'
import { CitiesList } from '../components'
import { addToFavourite, fetchCities } from '../actions'
import * as R from 'ramda'
import {
  getIsCitiesLoading,
  getHasCitiesErrored,
  getCitiesFromFavourite,
} from '../selectors'

const mapStateToProps = R.applySpec({
  items: getCitiesFromFavourite,
  isLoading: getIsCitiesLoading,
  hasErrored: getHasCitiesErrored,
})

const mapDispatchToProps = {
  addToFavourite,
  fetchCities,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CitiesList)
