import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const UL = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #999;
  border-radius: 3px

  .Link {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none
    :hover {
      background-color: #111;
    }
  }
`

const LI = styled.li`
  float: left;
`

const Header = () => {
  return (
    <UL>
      <LI>
        <Link className="Link" to="/">
          Home
        </Link>
      </LI>
      <LI>
        <Link className="Link" to="/favourite">
          Favourite
        </Link>
      </LI>
    </UL>
  )
}

export default Header
