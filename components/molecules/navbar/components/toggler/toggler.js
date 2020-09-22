/**
 * Navbar - Toggler
 */

// React
import { bool, func } from 'prop-types'

// UI
import { Icon, MEDIA_QUERY } from '../../../../'

// Style
import styled from 'styled-components'

export const Toggler = ({ custom, handleMenuClick, visible }) => {
  const CustomTogglerIconOpen = () => (
    <StyledIcon>
      <div />
      <div />
    </StyledIcon>
  )

  const CustomToggler = () => (
    <StyledToggler
      aria-expanded={visible ? 'false' : 'true'}
      aria-label='Toggle navigation'
      onClick={handleMenuClick}
    >
      {!visible ? <CustomTogglerIconOpen /> : <CustomTogglerIconOpen />}
    </StyledToggler>
  )

  const DefaultToggler = () => (
    <StyledToggler
      aria-expanded={visible ? 'false' : 'true'}
      aria-label='Toggle navigation'
      onClick={handleMenuClick}
    >
      {!visible ? <Icon icon='bars' prefix='fas' /> : <Icon icon='times' size='lg' prefix='fas' />}
      <StyledText>Menu</StyledText>
    </StyledToggler>
  )

  if (custom) {
    return <CustomToggler />
  } else {
    return <DefaultToggler />
  }
}

const StyledIcon = styled.div`
  margin-top: 0.25rem;
  div {
    width: 2rem;
    height: 0.125rem;
    background: black;
    margin-bottom: 0.375rem;
    transition: 0.3s all linear;
  }
  div:nth-child(2) {
    &:active {
      transform: rotate(-45deg);
    }
  }
  div:nth-child(1) {
    &:active {
      transform: rotate(45deg);
    }
  }
`

const StyledToggler = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.NAVBAR.colourToggler};
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
  custom: bool,
  handleMenuClick: func.isRequired,
  visible: bool
}

Toggler.defaultProps = {
  custom: false,
  visible: true
}
