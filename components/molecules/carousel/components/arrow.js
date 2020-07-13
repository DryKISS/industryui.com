/**
 * Carousel Arrow
 */

// React
import React from 'react'
import { func, oneOf, string } from 'prop-types'

// Style
import styled, { css } from 'styled-components'
import { Icon } from '../../../'

export const CarouselArrow = ({ clickFunction, context, direction, icon, position }) => (
  <StyledContainer direction={direction} onClick={clickFunction}>
    <StyledArrow context={context} icon={icon} position={position} />
  </StyledContainer>
)

const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  ${({ direction }) => (direction === 'left' ? 'left: 0;' : 'right: 0;')}
  background: linear-gradient(${({ direction }) =>
    direction === 'left' ? 90 : 270}deg, rgba(0, 0, 0, 0.1) 0%, rgba(255, 255, 255, 0) 100%);
  height: 100%;
  width: 80px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  padding: 1rem 0;

  &:hover {
    background: linear-gradient(${({ direction }) =>
      direction === 'left' ? 90 : 270}deg, rgba(0, 0, 0, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
  }
`

const StyledArrow = styled(Icon)`
  color: ${({ context, theme: { COLOUR } }) => COLOUR[context]};
  align-self: center;

  ${({ position }) =>
    position === 'top' &&
    css`
      align-self: flex-start;
    `};

  ${({ position }) =>
    position === 'bottom' &&
    css`
      align-self: flex-end;
    `};

  && {
    font-size: 2rem;
  }
`

CarouselArrow.propTypes = {
  clickFunction: func.isRequired,
  context: string.isRequired,
  direction: oneOf(['left', 'right']).isRequired,
  icon: string.isRequired,
  position: string.isRequired
}
