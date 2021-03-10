/**
 * Components - Organisms - Bar - Components - Toggle
 */

// React
import React from 'react'
import { bool, func, string } from 'prop-types'

// UI
import { ChevronRightIcon } from '../../../'
import { BarConfig } from './config'

// Style
import styled, { css } from 'styled-components'

export const BarToggle = ({ barWidth, onClick, open, placement }) => {
  return (
    <OpenButton onClick={onClick} open={open} placement={placement} place={barWidth}>
      <ChevronRightIcon />
    </OpenButton>
  )
}

const OpenButton = styled.div`
  align-items: center;
  border-radius: 0.25rem;
  cursor: pointer;
  display: flex;
  position: fixed;
  transition-duration: ${({ theme }) => theme.BAR.transitionDuration};
  transition-property: left, opacity, right, width, transition;
  transition-timing-function: ${({ theme }) => theme.BAR.transitionTiming};
  z-index: 10;
  svg {
    right: 0.2rem;
    position: absolute;
    transition: transform ${({ theme }) => theme.BAR.transitionDuration} ease;
  }
  ${({ open }) => {
    return css`
      svg,
      ._ {
        transform: rotate(${open ? '180' : '0'}deg);
      }
    `
  }}

  ${({ placement, open, place }) =>
    (placement === BarConfig.PLACEMENT.LEFT || placement === BarConfig.PLACEMENT.RIGHT) &&
    css`
      background-color:${({ theme }) => theme.BAR.background};
      border-top-${placement}-radius: 0;
      border-bottom-${placement}-radius: 0;
      width: 1.5rem;
      height: 3rem;
      ${placement}: ${open ? place + 'rem' : '1rem'};
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
