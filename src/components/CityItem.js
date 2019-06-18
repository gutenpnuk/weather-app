import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  border-bottom: 1px solid lightgray;
  margin: 0 10px 3px;
`
const Button = styled.button`
  background: white;
  color: #333;
  margin: 7px;
  padding: 1px 3px;
  border: 1px solid #333;
  border-radius: 2px;

  :disabled {
    color: #999;
    border: 1px solid #999;
  }
`
const TitleContainer = styled.p`
  flex-grow: 1;
  margin: 5px;
`
const LinkContainer = styled(Link)`
  text-decoration: none;
  color: #2374fc;

  :hover {
    text-decoration: underline;
    color: #1751b2;
  }
`

function CityItem({ woeid, title, toFavourite, isDisabled }) {
  const onClickToFavourite = useCallback(() => {
    toFavourite({ woeid, title })
  })
  return (
    <MainContainer>
      <TitleContainer>
        <LinkContainer to={`/api/${woeid}`}>{title}</LinkContainer>
      </TitleContainer>
      <Button disabled={isDisabled} onClick={onClickToFavourite}>
        To favourite
      </Button>
    </MainContainer>
  )
}

export default CityItem
