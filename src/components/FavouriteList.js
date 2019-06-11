import React from 'react'
import FavouriteItem from './FavouriteItem'
import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  font-family: Arial, sans-serif;
`

const NameForm = styled.input`
  margin: 20px;
  width: 200px;
  height: 20px;
  font-size: 10pt
  border: 1px solid gray
  border-radius: 2px
  padding: 3px 10px
`

const FavouriteList = ({
  setFilter,
  items,
  removeFromFavourite,
  hasErrored,
  isLoading,
}) => {
  return (
    <Main>
      <NameForm
        placeholder="Search"
        type="text"
        onChange={({ target: { value } }) => {
          setFilter(value)
        }}
      />
      {hasErrored ? (
        <p>Error</p>
      ) : isLoading ? (
        <p>Loading</p>
      ) : (
        items.map(item => (
          <FavouriteItem
            key={item.woeid}
            {...item}
            fromFavourite={removeFromFavourite}
          />
        ))
      )}
    </Main>
  )
}

export default FavouriteList
