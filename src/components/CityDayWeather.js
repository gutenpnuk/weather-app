import React from 'react'

const CityDayWeather = ({
  applicable_date,
  weather_state_abbr,
  weather_state_name,
  max_temp,
  min_temp,
  wind_direction,
  wind_speed,
}) => {
  return (
    <div>
      <p>{applicable_date}</p>
      <img
        src={`/static/img/weather/ico/${weather_state_abbr}.ico`}
        width="30"
        height="30"
        alt={weather_state_abbr}
      />
      <p>{weather_state_name}</p>
      <p>Max: {Math.round(max_temp)}&#8451;</p>
      <p>Min: {Math.round(min_temp)}&#8451;</p>
      <p style={{ WebkitTransform: `rotate(0deg)` }}>
        &#x2191;
      </p>
      <p>{Math.round(wind_speed)}mph</p>
      <hr/>
    </div>
  )
}

export default CityDayWeather
