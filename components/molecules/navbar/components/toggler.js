/**
 * Components - Molecules - Navbar - Components - Toggler
 */

// React
import React from 'react'
import { bool, func } from 'prop-types'

// UI
import { Icon } from '../../../atoms/icon/icon/icon'
import { MEDIA_QUERY } from '../../../utils/mediaQueries'

// Style
import styled from 'styled-components'

export const Toggler = ({ handleMenuClick, visible }) => {
  return (
    <StyledToggler
      aria-expanded={visible ? 'false' : 'true'}
      aria-label="Toggle navigation"
      onClick={handleMenuClick}
    >
      {!visible ? <Icon icon="bars" prefix="fas" /> : <Icon icon="times" prefix="fas" />}
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
  ${MEDIA_QUERY.desktop`
    display: none;
  `}
`

const StyledText = styled.span`
  margin-left: 0.25rem;
`

Toggler.propTypes = {
  handleMenuClick: func.isRequired,
  visible: bool,
}

Toggler.defaultProps = {
  visible: true,
}
