/**
 * Components - Molecules - Navbar — Navbar
 */

// Style
import styled from 'styled-components'

// UI
import MEDIA_QUERY from '../../../utils/mediaQuery/query'

const Overlay = styled.div`
  background: ${({ theme }) => theme.NAVBAR.overlayBackground};
  bottom: 0;
  cursor: pointer;
  height: ${({ theme }) => theme.NAVBAR.overlayHeight};
  position: ${({ theme }) => theme.NAVBAR.overlayPosition};
  right: 0;
  top: 0;
  transition-property: width;
  transition-duration: 0.2s;
  width: ${({ theme }) => theme.NAVBAR.overlayWidth};
  z-index: 199;

  ${({ theme }) => MEDIA_QUERY[theme.NAVBAR.breakpoint]`
      display: none;
    `}
`

export default Overlay
