import React from 'react'
import CityDayWeather from './CityDayWeather'
import styled from 'styled-components'

const City = ({city, hasErrored, isLoading}) => {
  const weather = city.consolidated_weather || []

  return (
    <div>
      {hasErrored ? (
        <p>Error</p>
      ) : isLoading ? (
        <p>Loading</p>
      ) : (
        <div>
          <p>{city.title}</p>
          {weather.map(item => (
            <CityDayWeather key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default City
