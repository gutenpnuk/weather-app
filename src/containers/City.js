import { connect } from 'react-redux'
import { City } from '../components'
import {
  getIsWeatherLoading,
  getHasWeatherErrored,
  getWeatherData,
  getConsolidatedWeather
} from '../selectors/weather'
import * as R from 'ramda'
import { fetchWeather } from '../actions'

const mapStateToProps = R.applySpec({
  isLoading: getIsWeatherLoading,
  hasErrored: getHasWeatherErrored,
  weatherData: getWeatherData,
  weather: getConsolidatedWeather,
})

const mapDispatchToProps = {
  fetchWeather,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(City)
