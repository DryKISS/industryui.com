/**
 * Molecules - OffCanvas - Container
 */

// React
import { bool, string } from 'prop-types'

// UI
import { MEDIA_QUERY } from '../../../'

// Style
import styled, { css } from 'styled-components'

export const OffCanvasDiv = styled.div`
  background-color: #fff;
  border-left: ${({ show }) => (show ? 'none' : '1px solid #cecece')};
  box-shadow: ${({ show }) => (show ? '-5px 0px 38px rgba(0, 0, 0, 0.15)' : 'none')};
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  transition: transform ${({ duration }) => duration}ms ease-in-out;
  z-index: 9999;

  /* Top Placement */
  ${({ placement }) =>
    placement === 'top' &&
    css`
      height: ${({ height }) => height || '50%'};
      left: 0;
      right: 0;
      top: 0;
      width: 100vw;
    `}

  /* Right Placement */
  ${({ placement }) =>
    placement === 'right' &&
    css`
      height: 100vh;
      right: 0;
      top: 0;
      width: 90%;
      ${MEDIA_QUERY.desktop`
        width: ${({ width }) => width};
      `}
    `}

  /* Bottom Placement */
  ${({ placement }) =>
    placement === 'bottom' &&
    css`
      bottom: 0;
      height: ${({ height }) => height || '50%'};
      left: 0;
      right: 0;
      width: 100vw;
    `}

  /* Left Placement */
  ${({ placement }) =>
    placement === 'left' &&
    css`
      height: 100vh;
      left: 0;
      top: 0;
      width: 90%;
      ${MEDIA_QUERY.desktop`
        width: ${({ width }) => width};
      `}
    `}
`

OffCanvasDiv.propTypes = {
  height: string,
  show: bool,
  width: string,
}
