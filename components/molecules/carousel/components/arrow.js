/**
 * Carousel Arrow
 */

// React
import React from 'react'
import { func, string } from 'prop-types'

// Style
import styled, { css } from 'styled-components'
import { Icon } from '../../../'

export const CarouselArrow = ({ clickFunction, context, direction, icon, position }) => (
  <StyledArrow
    context={context}
    direction={direction}
    icon={icon}
    onClick={clickFunction}
    position={position}
  />
)

const StyledArrow = styled(Icon)`
  color: ${({ context, theme: { COLOUR } }) => COLOUR[context]};
  cursor: pointer;
  position: absolute;
  top: 50%;
  ${({ direction }) => (direction === 'left' ? 'left: 1rem;' : 'right: 1rem;')}

  && {
    font-size: 2rem;
  }

  ${({ position }) =>
    position === 'top' &&
    css`
      top: 10%;
    `};

  ${({ position }) =>
    position === 'bottom' &&
    css`
      top: unset;
      bottom: 10%;
    `};
`

CarouselArrow.propTypes = {
  clickFunction: func.isRequired,
  context: string.isRequired,
  direction: string.isRequired,
  icon: string.isRequired,
  position: string.isRequired
}
