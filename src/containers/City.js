import { connect } from 'react-redux'
import { City } from '../components'
import {
  getIsCityLoading,
  getHasCityErrored,
  getCity,
  getConsolidatedWeather,
} from '../selectors'
import { fetchCity } from '../actions'

const mapStateToProps = state => {
  return {
    isLoading: getIsCityLoading(state),
    hasErrored: getHasCityErrored(state),
    city: getCity(state),
    weather: getConsolidatedWeather(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCity: id => {
      dispatch(fetchCity(id))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(City)
