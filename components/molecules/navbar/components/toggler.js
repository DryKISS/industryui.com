/**
 * Components - Molecules - Navbar - Components - Toggler
 */

// React
import React from 'react'
import { array, bool, func, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import Icon from '../../../atoms/icon/icon/icon'
import MEDIA_QUERY from '../../../utils/mediaQuery/query'

const Toggler = ({ handleMenuClick, icons, label, text, visible }) => {
  return (
    <StyledToggler
      aria-expanded={visible ? 'false' : 'true'}
      aria-label={label}
      onClick={handleMenuClick}
    >
      {!visible ? <Icon icon={icons[0]} /> : <Icon icon={icons[1]} />}
      <StyledText>{text}</StyledText>
    </StyledToggler>
  )
}

const StyledToggler = styled.a`
  color: ${({ theme }) => theme.NAVBAR.togglerColour};
  cursor: pointer;
  font-size: ${({ theme }) => theme.NAVBAR.togglerSize};
  padding: ${({ theme }) => theme.NAVBAR.togglerPadding};

  &:hover {
    color: ${({ theme }) => theme.NAVBAR.togglerHover};
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
  icons: array,
  label: string,
  text: string,
  visible: bool
}

Toggler.defaultProps = {
  icons: ['bars', 'times'],
  label: 'Toggle navigation',
  text: 'Menu',
  visible: true
}

export default Toggler
