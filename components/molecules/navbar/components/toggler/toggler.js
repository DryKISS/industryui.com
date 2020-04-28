/**
 * Navbar — Toggler
 */

// React
import { bool, func } from 'prop-types'

// UI
import { Icon, MEDIA_QUERY } from '../../../../'

// Style
import styled, { keyframes } from 'styled-components'

export const Toggler = ({ custom, handleMenuClick, visible }) => {
  const CustomTogglerIconClosed = () => (
    <StyledIcon>
      <StyledlineTopAnimation />
      <StyledlineBottomAnimation />
    </StyledIcon>
  )

  const CustomTogglerIconOpen = () => (
    <StyledIcon>
      <StyledlineTop />
      <StyledlineBottom />
    </StyledIcon>
  )

  const CustomToggler = () => (
    <StyledToggler
      aria-expanded={visible ? 'false' : 'true'}
      aria-label='Toggle navigation'
      onClick={handleMenuClick}
    >
      {!visible && <CustomTogglerIconClosed />}

      {visible && <CustomTogglerIconOpen />}
    </StyledToggler>
  )

  const DefaultToggler = () => (
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

  if (custom) {
    return <CustomToggler />
  } else {
    return <DefaultToggler />
  }
}

const StyledIcon = styled.div`
  margin-top: 0.25rem;
`
const ToggleAnimationTop = keyframes`
  from {
    transform: rotate(1deg);
  }
  to {
    transform: rotate(-20deg);
  }
`
const ToggleAnimationBottom = keyframes`
  from {
    transform: rotate(1deg);
  }
  to {
    transform: rotate(20deg);
  }
`
const StyledlineTop = styled.div`
  width: 2rem;
  height: 0.125rem;
  background: black;
  margin-bottom: 0.375rem;
`
const StyledlineBottom = styled.div`
  width: 2rem;
  height: 0.125rem;
  background: black;
`
const StyledlineTopAnimation = styled(StyledlineTop)`
  &:active {
    animation: 0.2s ${ToggleAnimationTop} ease-out;
  }
`
const StyledlineBottomAnimation = styled(StyledlineTop)`
  &:active {
    animation: 0.2s ${ToggleAnimationBottom} ease-out;
  }
`

const StyledToggler = styled.a`
  cursor: pointer;
  color: ${({ theme }) =>
    theme.NAVBAR.colourToggler ? theme.NAVBAR.colourToggler : theme.NAVBAR.colourActive};
  font-size: ${({ theme }) =>
    theme.NAVBAR.fontSizeToggler ? theme.NAVBAR.fontSizeToggler : '0.8125rem'};
  padding: ${({ theme }) =>
    theme.NAVBAR.paddingToggler ? theme.NAVBAR.paddingToggler : '1.25rem 0 1.25rem 1rem'};

  &:hover {
    color: ${({ theme }) =>
      theme.NAVBAR.colourHoverToggler ? theme.NAVBAR.colourHoverToggler : theme.COLOUR.primary};
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
