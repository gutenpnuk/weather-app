import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.div`
  display: -webkit-flex;
  -webkit-flex-direction: row;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`

const P = styled.p`
  padding: 10px;
  color: black
  :hover {
    background-color: gray;
  }
`

const Header = () => {
  return (
    <Nav>
      <Link to="/">
        <P>Home</P>
      </Link>
      <Link to="/favourite">
        <P>Favourite</P>
      </Link>
    </Nav>
  )
}

export default Header
