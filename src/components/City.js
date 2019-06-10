import React from 'react'
import CityDailyWeather from './CityDailyWeather'
import styled from 'styled-components'

class City extends React.Component {
  constructor(props) {
    super(props)
    props.fetchCity(props.match.params.id)
  }

  render() {
    const { city, hasErrored, isLoading, weather } = this.props
    return (
      <div>
        {hasErrored ? (
          <p>Error</p>
        ) : isLoading ? (
          <p>Loading</p>
        ) : (
          <Main>
            <Title>{city.title}</Title>
            {weather.map(item => (
              <CityDailyWeather key={item.id} {...item} />
            ))}
          </Main>
        )}
      </div>
    )
  }
}

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

export default City
