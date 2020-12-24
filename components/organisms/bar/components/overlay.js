/**
 * Components - Organisms - Bar
 */

// React
import { bool, func, number, oneOf } from 'prop-types'

// UI
import { BarConfig } from './config'

// Style
import styled, { css } from 'styled-components'

export const BarOverlay = ({ onClick, open, placement, variant, width }) => {
  return (
    <StyledOverlay
      onClick={onClick}
      open={open}
      placement={placement}
      variant={variant}
      width={width}
    />
  )
}

const StyledOverlay = styled.div`
  transition: ${({ theme: { BAR }, placement }) => css`
    opacity ${BAR.transitionDuration} ${BAR.transitionTiming}, ${placement} ${BAR.transitionDuration} ${BAR.transitionTiming};
  `};

  ${({ placement, variant, width }) =>
    variant === BarConfig.VARIANT.OVERLAY &&
    (placement === BarConfig.PLACEMENT.LEFT || placement === BarConfig.PLACEMENT.RIGHT) &&
    css`
      width: calc(100% - ${width}rem);
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 1;
      top: 0;
      position: absolute;
      ${placement}: ${width}rem;
    `}

  ${({ open, placement }) =>
    !open &&
    css`
      opacity: 0;
      pointer-events: none;
      width: 100%;
      ${placement}: 0;
    `}
`

BarOverlay.propTypes = {
  onClick: func.isRequired,
  open: bool,
  placement: oneOf(Object.values(BarConfig.PLACEMENT)),
  variant: oneOf(['push', 'overlay']),
  width: number
}

BarOverlay.defaultProps = {
  open: true,
  placement: 'left',
  variant: 'overlay',
  width: 10
}
