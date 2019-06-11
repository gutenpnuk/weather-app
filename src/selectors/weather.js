export const getIsWeatherLoading = state => state.weather.isLoading

export const getHasWeatherErrored = state => state.weather.hasErrored

export const getWeatherData = state => state.weather.weatherData

export const getWeatherQuery = state => state.weather.query

export const getConsolidatedWeather = state =>
  getWeatherData(state).consolidatedWeather || []
