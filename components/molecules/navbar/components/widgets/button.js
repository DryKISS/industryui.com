/**
 * Components - Molecules - Navbar - Widgets - Button
 */

// React
import React from 'react'
import { bool, string, func } from 'prop-types'

// UI
import { Button, Link, MEDIA_QUERY_MAX } from '../../../../'

// Style
import styled from 'styled-components'

export const NavButton = ({ closeMenu, id, name, to, type, visible }) => {
  return (
    <StyledLink border={false} passHref to={to}>
      <StyledButton
        id={id}
        context={type.context}
        content={name}
        onClick={visible ? closeMenu : () => {}}
        outline={type.outline}
        size={type.size}
        type={type.as}
      />
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  padding: 0rem 0.75rem;
`

const StyledButton = styled(Button)`
  ${({ theme }) => {
    const breakpoint = MEDIA_QUERY_MAX[theme.NAVBAR.breakpoint]

    return breakpoint`
    background: none;
    border: none;
    color: ${theme.NAVBAR.colourActive};
    cursor: pointer;
    font-size: 0.8125rem;
    padding: 1rem 0.75rem;
    width: 100%;

    &:hover {
      color: ${theme.COLOUR.primary};
      background: none;
    }
    `
  }}
`

NavButton.propTypes = {
  closeMenu: func,
  id: string.isRequired,
  name: string.isRequired,
  to: string.isRequired,
  type: string.isRequired,
  visible: bool
}

NavButton.defaultProps = {
  visible: false
}
