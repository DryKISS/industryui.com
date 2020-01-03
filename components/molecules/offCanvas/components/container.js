import { bool, string } from 'prop-types'
import styled, { css } from 'styled-components'

export const OffCanvasDiv = styled.div`
  box-shadow: ${({ show }) => (show ? '-5px 5px 22px -15px rgba(0,0,0,0.75)' : 'none')};
  border-left: ${({ show }) => (show ? 'none' : '1px solid #cecece')};
  position: fixed;
  background-color: #fff;
  transition: transform ${({ duration }) => duration}ms ease-in-out;
  will-change: transform;
  z-index: 9999;
  overflow-y: auto;

  /* Top Placement */
  ${({ placement }) =>
    placement === 'top' &&
    css`
      top: 0;
      right: 0;
      left: 0;
      width: 100vw;
      height: ${({ height }) => height || '50%'};
      transform: ${({ width, show }) => `translateY(${show ? 0 : '-100%'})`};
    `}

  /* Right Placement */
  ${({ placement }) =>
    placement === 'right' &&
    css`
      top: 0;
      right: 0;
      width: ${({ width }) => width};
      height: 100vh;
      transform: ${({ width, show }) => `translateX(${show ? 0 : '100%'})`};
    `}

  /* Bottom Placement */
  ${({ placement }) =>
    placement === 'bottom' &&
    css`
      bottom: 0;
      right: 0;
      left: 0;
      width: 100vw;
      height: ${({ height }) => height || '50%'};
      transform: ${({ width, show }) => `translateY(${show ? 0 : '100%'})`};
    `}

  /* Left Placement */
  ${({ placement }) =>
    placement === 'left' &&
    css`
      top: 0;
      left: 0;
      width: ${({ width }) => width};
      height: 100vh;
      transform: ${({ width, show }) => `translateX(${show ? 0 : '-100%'})`};
    `}
`

OffCanvasDiv.propTypes = {
  show: bool,
  width: string
}
