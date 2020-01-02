import styled from 'styled-components'

export const OffCanvasOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, ${({ opacity, show }) => (show ? opacity : 0)});
  transition: background-color ${({ duration }) => duration}ms ease-in-out;
  will-change: background-color;
  z-index: 9998;
`
