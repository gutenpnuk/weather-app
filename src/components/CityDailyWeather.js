import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

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
    <Main>
      <Title>{applicableDate}</Title>
      <FlexImg>
        <img
          className="img"
          src={`/static/img/weather/ico/${weatherStateAbbr}.ico`}
          width="30"
          height="30"
          alt={weatherStateAbbr}
        />
        <p>{weatherStateName}</p>
      </FlexImg>
      <p>Max: {Math.round(maxTemp)}&#8451;</p>
      <p>Min: {Math.round(minTemp)}&#8451;</p>
      <ThemeProvider theme={{ degs: windDirection }}>
        <FlexWind>
          <p className="arrow">&#x2191;</p>
          <p>{Math.round(windSpeed)}mph</p>
        </FlexWind>
      </ThemeProvider>
    </Main>
  )
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 0 40px;
  font-family: Arial, sans-serif;
`

const FlexImg = styled.div`
  display: flex;
  flex-direction: row;
  .img {
    margin-right: 10px;
  }
`

const FlexWind = styled.div`
  display: flex;
  flex-direction: row;
  .arrow {
    margin-right: 10px;
    transform: rotate(${props => props.theme.degs}deg);
  }
`

const Title = styled.p`
  color: #2374fc;
`

export default CityDailyWeather
