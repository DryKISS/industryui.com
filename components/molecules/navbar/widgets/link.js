/**
 * Navbar — Widgets — Link
 */

// React
import React from 'react'
import { bool, string, func } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import Link from '../../../atoms/link/link'
import MEDIA_QUERY from '../../../utils/mediaQuery/query'

const NavLink = ({ active, closeMenu, id, name, onClick, to, type, visible }) => {
  const handleClick = () => {
    visible && closeMenu()
    onClick && onClick()
  }

  if (type && (!active || active !== type)) {
    return
  }

  return (
    <Link border={false} onClick={handleClick} passHref to={to}>
      <StyledLink id={id}>{name}</StyledLink>
    </Link>
  )
}

const StyledLink = styled.span`
  align-items: center;
  color: ${({ theme }) => theme.NAVBAR.colourDefault};
  display: flex;
  flex: 1;
  justify-content: center;
  padding: ${({ theme }) => theme.NAVBAR.paddingLink};
  /* &:hover {
    color: ${({ theme }) => theme.NAVBAR.colourHover};
  } */

  ${({ theme }) => MEDIA_QUERY[theme.NAVBAR.breakpoint]`
      color: ${theme.NAVBAR.colourDefaultDesktop};
      // &:hover {
      //   color: ${theme.NAVBAR.colourHoverDesktop};
      // }
    `}
`

NavLink.propTypes = {
  active: string,
  closeMenu: func,
  id: string.isRequired,
  name: string.isRequired,
  onClick: func,
  to: string.isRequired,
  type: string.isRequired,
  visible: bool
}

NavLink.defaultProps = {
  visible: false
}

export default NavLink
