/**
 * Navbar toggler
 */

// React
import { bool, func } from 'prop-types'

// UI
import { Icon, MEDIA_QUERY } from '../../../'

// Style
import styled from 'styled-components'

export const Toggler = ({ handleMenuClick, visible }) => {
  return (
    <StyledToggler
      aria-expanded={visible ? 'false' : 'true'}
      aria-label='Toggle navigation'
      onClick={handleMenuClick}
    >
      {!visible && (
        <StyledIconMenu aria-hidden='true' role='img' viewBox='0 0 448 512'>
          <Icon icon='bars' />
        </StyledIconMenu>
      )}

      {visible && (
        <StyledIconClose aria-hidden='true' role='img' viewBox='0 0 352 512'>
          <Icon icon='times' size='lg' />
        </StyledIconClose>
      )}

      <StyledText>Menu</StyledText>
    </StyledToggler>
  )
}

const StyledToggler = styled.a`
  cursor: pointer;
  font-size: 18px;
  padding: 20px 15px;

  ${MEDIA_QUERY.desktop`
    display: none;
  `}
`

const StyledIconMenu = styled.svg`
  display: inline-block;
  vertical-align: -2px;
  width: 0.9rem;
`

const StyledIconClose = styled.svg`
  display: inline-block;
  vertical-align: -2.5px;
  width: 0.7em;
`

const StyledText = styled.span`
  margin-left: 0.25rem;
`

Toggler.propTypes = {
  handleMenuClick: func.isRequired,
  visible: bool
}
