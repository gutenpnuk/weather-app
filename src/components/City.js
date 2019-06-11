import React from 'react'
import CityDailyWeather from './CityDailyWeather'
import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 30px 5px
  padding-bottom: 10px
  border-bottom: 1px solid lightgray
`
const Title = styled.p`
  margin-right: 30px;
  color: #2374fc
  font-family: Arial, sans-serif;
`
const Loader = styled.p`
  font-family: Arial, sans-serif;
`

class City extends React.Component {
  constructor(props) {
    super(props)
    props.fetchWeather(props.match.params.id)
  }

  render() {
    const { weatherData, hasErrored, isLoading, weather } = this.props
    return (
      <div>
        {hasErrored ? (
          <Loader>Error</Loader>
        ) : isLoading ? (
          <Loader>Loading</Loader>
        ) : (
          <Main>
            <Title>{weatherData.title}</Title>
            {weather.map(item => (
              <CityDailyWeather key={item.id} {...item} />
            ))}
          </Main>
        )}
      </div>
    )
  }
}

export default City
