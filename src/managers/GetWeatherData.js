const GetWeatherData = city =>
  fetch(`location/${city}/`)
    .then(res => {
      if (res.status >= 200 && res.status < 300) {
        return res.json()
      } else {
        throw new Error()
      }
    })
    .then(data => {
      const consolidatedWeather = data.consolidated_weather.map(item => {
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
      })
      return {
        title: data.title,
        woeid: data.woeid,
        consolidatedWeather: consolidatedWeather,
      }
    })

export default GetWeatherData
