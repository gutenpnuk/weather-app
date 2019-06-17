import React, { useEffect } from 'react'
import CityDailyWeather from './CityDailyWeather'
import styled from 'styled-components'
import * as R from 'ramda'

const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 30px 5px;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;
`
const Title = styled.p`
  margin-right: 30px;
  color: #2374fc;
  font-family: Arial, sans-serif;
`
const Loader = styled.p`
  font-family: Arial, sans-serif;
`

const City = ({
  weatherData,
  hasErrored,
  isLoading,
  weather,
  fetchWeather,
  match,
}) => {
  useEffect(() => {
    fetchWeather(match.params.id)
  }, [fetchWeather, match.params.id])

  return (
    <div>
      {hasErrored ? (
        <Loader>Error</Loader>
      ) : isLoading ? (
        <Loader>Loading</Loader>
      ) : (
        <Main>
          <Title>{weatherData.title}</Title>
          {R.map(item => <CityDailyWeather key={item.id} {...item} />)(weather)}
        </Main>
      )}
    </div>
  )
}

export default City
