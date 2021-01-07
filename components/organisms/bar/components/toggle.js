/**
 * Components - Organisms - Bar - Components - Toggle
 */

// React
import { bool, func, string } from 'prop-types'

// UI
import { Icon } from '../../../'
import { BarConfig } from './config'

// Style
import styled, { css } from 'styled-components'

export const BarToggle = ({ onClick, open, placement }) => {
  return (
    <OpenButton onClick={onClick} open={open} placement={placement}>
      <Icon icon='user' prefix='fas' />
    </OpenButton>
  )
}

const OpenButton = styled.div`
  border-radius: 0.25rem;
  cursor: pointer;
  position: absolute;
  z-index: 10;

  svg {
    right: 0.2rem;
    position: absolute;
    top: 1rem;
    transform: rotate(0deg);
    transition: transform ${({ theme }) => theme.BAR.transitionDuration} ease;
  }

  ${({ placement }) =>
    (placement === BarConfig.PLACEMENT.LEFT || placement === BarConfig.PLACEMENT.RIGHT) &&
    css`
      background-color:${({ theme }) => theme.BAR.background};
      border-top-${placement}-radius: 0;
      border-bottom-${placement}-radius: 0;
      width: 1.5rem;
      height: 3rem;
      ${placement}: 100%;
    `}
`

BarToggle.propTypes = {
  onClick: func.isRequired,
  open: bool.isRequired,
  placement: string
}

BarToggle.defaultProps = {
  placement: 'left'
}
