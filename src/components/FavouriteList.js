import React, { useCallback } from 'react'
import FavouriteItem from './FavouriteItem'
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 15px auto;
  font-family: Arial, sans-serif;
`
const FilterContainer = styled.input`
  margin: 20px;
  width: 200px;
  height: 20px;
  font-size: 10pt;
  border: 1px solid gray;
  border-radius: 2px;
  padding: 3px 10px;
`

function FavouriteList({
  setFilter,
  items,
  removeFromFavourite,
  hasErrored,
  isLoading,
}) {
  const onChangeFilter = useCallback(({ target: { value } }) => {
    setFilter(value)
  })
  return (
    <MainContainer>
      <FilterContainer
        placeholder="Search"
        type="text"
        onChange={onChangeFilter}
      />
      {hasErrored ? (
        <p>Error</p>
      ) : isLoading ? (
        <p>Loading</p>
      ) : (
        items.map(item => (
          <FavouriteItem
            key={item.woeid}
            fromFavourite={removeFromFavourite}
            {...item}
          />
        ))
      )}
    </MainContainer>
  )
}

export default FavouriteList
