/**
 * Molecules - OffCanvas - Overlay
 */

// React
import { bool, number, string } from 'prop-types'

// Style
import styled from 'styled-components'

export const OffCanvasOverlay = styled.div`
  background-color: rgba(
    0,
    0,
    0,
    ${({ opacity, show }) => (show ? opacity : 0)}
  );
  height: 100vh;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: background-color ${({ duration }) => duration}ms ease-in-out;
  width: 100vw;
  will-change: background-color;
  z-index: 9998;
`

OffCanvasOverlay.propTypes = {
  duration: number,
  opacity: number,
  show: bool,
  width: string
}

OffCanvasOverlay.defaultProps = {
  duration: 300,
  opacity: 0.3
}
