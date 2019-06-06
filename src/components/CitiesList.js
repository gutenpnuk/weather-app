import React from 'react'
import CityItem from './CityItem'
import styled from 'styled-components'

const Main = styled.div`
  display: -webkit-flex;
  -webkit-flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
`

const NameForm = styled.input`
  margin: 20px;
  width: 200px;
`

const CitiesList = ({
  nullFetch,
  fetchData,
  hasErrored,
  isLoading,
  items,
  toFavourite,
  fetchCity,
  favouriteItems,
}) => {
  return (
    <Main>
      <NameForm
        type="text"
        onChange={({ target: { value } }) => {
          !value ? nullFetch() : fetchData(value)
        }}
      />
      {hasErrored ? (
        <p>Error</p>
      ) : isLoading ? (
        <p>Loading</p>
      ) : (
        items.map(item => (
          <CityItem
            key={item.woeid}
            {...item}
            toFavourite={toFavourite}
            fetchCity={fetchCity}
            favouriteItems={favouriteItems}
          />
        ))
      )}
    </Main>
  )
}

export default CitiesList
