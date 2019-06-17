import React from 'react'
import CityItem from './CityItem'
import styled from 'styled-components'
import * as R from 'ramda'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 15px auto;
  font-family: Arial, sans-serif;
`
const NameForm = styled.input`
  margin: 20px;
  width: 200px;
  height: 20px;
  font-size: 10pt;
  border: 1px solid gray;
  border-radius: 2px;
  padding: 3px 10px;
`

const CitiesList = ({
  fetchCities,
  hasErrored,
  isLoading,
  items,
  addToFavourite,
}) => {
  return (
    <Main>
      <NameForm
        placeholder="Search"
        type="text"
        onChange={({ target: { value } }) => fetchCities(value)}
      />
      {hasErrored ? (
        <p>Error</p>
      ) : isLoading ? (
        <p>Loading</p>
      ) : (
        R.map(item => (
          <CityItem key={item.woeid} {...item} toFavourite={addToFavourite} />
        ))(items)
      )}
    </Main>
  )
}

export default CitiesList
