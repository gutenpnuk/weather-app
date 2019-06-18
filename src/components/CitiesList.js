import React, { useCallback } from 'react'
import CityItem from './CityItem'
import styled from 'styled-components'

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

function CitiesList({
  fetchCities,
  hasErrored,
  isLoading,
  items,
  addToFavourite,
}) {
  const onChangeForm = useCallback(({ target: { value } }) => {
    fetchCities(value)
  })

  return (
    <Main>
      <NameForm placeholder="Search" type="text" onChange={onChangeForm} />
      {hasErrored ? (
        <p>Error</p>
      ) : isLoading ? (
        <p>Loading</p>
      ) : (
        items.map(item => (
          <CityItem key={item.woeid} toFavourite={addToFavourite} {...item} />
        ))
      )}
    </Main>
  )
}

export default CitiesList
