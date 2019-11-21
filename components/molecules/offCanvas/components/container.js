import { bool, string } from 'prop-types'
import styled from 'styled-components'

export const OffCanvasDiv = styled.div`
  box-shadow: ${({ show }) => (show ? '-5px 5px 22px -15px rgba(0,0,0,0.75)' : 'none')};
  border-left: ${({ show }) => (show ? 'none' : '1px solid #cecece')};
  position: fixed;
  top: 0;
  right: 0;
  width: ${({ width }) => width};
  height: 100vh;
  background-color: #fff;
  transform: ${({ width, show }) => `translateX(${show ? 0 : width})`};
  transition: transform 375ms cubic-bezier(0.6, -0.28, 0.735, 0.045);
  will-change: transform;
  z-index: 9999;
`

OffCanvasDiv.propTypes = {
  show: bool,
  width: string
}
