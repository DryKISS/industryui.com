/**
 * Navbar - Widgets - Icon
 */

// React
import React from 'react'
import { bool, string, func } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import Icon from '../../../atoms/icon/icon/icon'
import Link from '../../../atoms/link/link'

const NavIcon = ({ closeMenu, to, type, visible }) => {
  const handleClick = () => {
    visible && closeMenu()
  }

  return (
    <StyledLink border={false} onClick={handleClick} to={to}>
      <Icon icon={type.icon} />
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  align-items: center;
  color: ${({ theme }) => theme.NAVBAR.colourDefault};
  display: flex;
  flex: 1;
  justify-content: center;
  padding: ${({ theme }) => theme.NAVBAR.paddingLink};

  &:hover {
    color: ${({ theme }) => theme.NAVBAR.colourHover};
  }
`

NavIcon.propTypes = {
  closeMenu: func,
  to: string.isRequired,
  type: string.isRequired,
  visible: bool
}

NavIcon.defaultProps = {
  visible: false
}

export default NavIcon
