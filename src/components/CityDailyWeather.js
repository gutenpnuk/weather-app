import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 0 40px;
  font-family: Arial, sans-serif;
`
const WeatherHeader = styled.div`
  display: flex;
`
const ImageContainer = styled.img`
  margin-right: 10px;
`
const WindContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const Arrow = styled.p`
  margin-right: 10px;
  transform: rotate(${props => props.theme.degs}deg);
`
const Title = styled.p`
  color: #2374fc;
`

const CityDailyWeather = ({
  applicableDate,
  weatherStateAbbr,
  weatherStateName,
  maxTemp,
  minTemp,
  windDirection,
  windSpeed,
}) => {
  return (
    <MainContainer>
      <Title>{applicableDate}</Title>
      <WeatherHeader>
        <ImageContainer
          src={`/static/img/weather/ico/${weatherStateAbbr}.ico`}
          width="30"
          height="30"
          alt={weatherStateAbbr}
        />
        <p>{weatherStateName}</p>
      </WeatherHeader>
      <p>Max: {Math.round(maxTemp)}&#8451;</p>
      <p>Min: {Math.round(minTemp)}&#8451;</p>
      <WindContainer>
        <Arrow theme={{ degs: windDirection }}>&#x2191;</Arrow>
        <p>{Math.round(windSpeed)}mph</p>
      </WindContainer>
    </MainContainer>
  )
}

export default CityDailyWeather
