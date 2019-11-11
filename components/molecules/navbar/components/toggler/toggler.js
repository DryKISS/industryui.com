/**
 * Navbar - Toggler
 */

// React
import { bool, func } from 'prop-types'

// UI
import { Icon, MEDIA_QUERY } from '../../../../'

// Style
import styled from 'styled-components'

export const Toggler = ({ handleMenuClick, visible }) => {
  return (
    <StyledToggler
      aria-expanded={visible ? 'false' : 'true'}
      aria-label='Toggle navigation'
      onClick={handleMenuClick}
    >
      {!visible && <Icon icon='bars' />}

      {visible && <Icon icon='times' size='lg' />}

      <StyledText>Menu</StyledText>
    </StyledToggler>
  )
}

const StyledToggler = styled.a`
  color: ${({ theme }) => theme.NAVBAR.colourActive};
  cursor: pointer;
  font-size: 0.8125rem;
  padding: 1.25rem 1rem;

  &:hover {
    color: ${({ theme }) => theme.COLOUR.primary};
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
  visible: bool
}
