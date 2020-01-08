/**
 * Carousel Arrow
 */

// React
import React from 'react'
import { func, string } from 'prop-types'

// Style
import styled from 'styled-components'
import { Icon } from '../../../'

const CarouselArrow = ({ direction, clickFunction, icon }) => (
  <StyledArrow icon={icon} onClick={clickFunction} direction={direction} />
)

CarouselArrow.propTypes = {
  direction: string,
  clickFunction: func,
  icon: string
}

const StyledArrow = styled(Icon)`
  color: #000;
  cursor: pointer;
  position: absolute;
  top: 50%;
  ${({ direction }) => (direction === 'left' ? 'left: 1rem;' : 'right: 1rem;')}
  && {
    font-size: 2rem;
  }
`
export default CarouselArrow
