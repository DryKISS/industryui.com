/**
 * Components - Molecules - Navbar - Components - Toggler
 */

// React
import React from 'react'
import { bool, func } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import Icon from '../../atoms/icon/icon/icon'
import MEDIA_QUERY from '../../utils/mediaQuery/query'

const Toggler = ({ handleMenuClick, visible }) => {
  return (
    <StyledToggler
      aria-expanded={visible ? 'false' : 'true'}
      aria-label="Toggle navigation"
      onClick={handleMenuClick}
    >
      {!visible ? <Icon icon="bars" /> : <Icon icon="times" />}
      <StyledText>Menu</StyledText>
    </StyledToggler>
  )
}

const StyledToggler = styled.a`
  color: ${({ theme }) => theme.NAVBAR.colourToggler};
  cursor: pointer;
  font-size: ${({ theme }) => theme.NAVBAR.fontSizeToggler};
  padding: ${({ theme }) => theme.NAVBAR.paddingToggler};
  &:hover {
    color: ${({ theme }) => theme.NAVBAR.colourHoverToggler};
  }

  ${({ theme }) => MEDIA_QUERY[theme.NAVBAR.breakpoint]`
      display: none;
    `}
`

const StyledText = styled.span`
  margin-left: 0.25rem;
`

Toggler.propTypes = {
  handleMenuClick: func.isRequired,
  visible: bool
}

Toggler.defaultProps = {
  visible: true
}

export default Toggler
