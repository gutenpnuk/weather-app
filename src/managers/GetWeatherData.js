import * as R from 'ramda'

export const getWeatherData = R.pipeP(
  city => fetch(`location/${city}/`),
  res => res.json(),
  data => {
    const consolidatedWeather = R.map(item => {
      return {
        id: item.id,
        applicableDate: item.applicable_date,
        weatherStateAbbr: item.weather_state_abbr,
        weatherStateName: item.weather_state_name,
        maxTemp: item.max_temp,
        minTemp: item.min_temp,
        windDirection: item.wind_direction,
        windSpeed: item.wind_speed,
      }
    }, data.consolidated_weather)
    return {
      title: data.title,
      woeid: data.woeid,
      consolidatedWeather: consolidatedWeather,
    }
  },
)
