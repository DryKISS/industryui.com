/**
 * Carousel
 */

// React
import React, { useState } from 'react'
import { oneOfType, number, array, string, bool } from 'prop-types'

// styled-components
import styled from 'styled-components'
import { Icon } from '../../../'

const Wrapper = styled.div`
  position: relative;
  width: ${({ width, fullWidth }) => (fullWidth ? '100%' : `${width}px`)};
  width: ${({ width, fullWidth }) => (fullWidth ? '100%' : `${width}px`)};
  height: ${({ height }) => `${height}px`};
  min-height: ${({ height }) => `${height}px`};
  margin: 0;
`

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

const StyledSlide = styled.div`
  height: 100%;
  width: 100%;
`

export const Carousel = ({ children, width, height, fullWidth }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const previousSlide = () => {
    const lastIndex = children.length - 1
    const shouldResetIndex = currentImageIndex === 0
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1
    setCurrentImageIndex(index)
  }

  const nextSlide = () => {
    const lastIndex = children.length - 1
    const shouldResetIndex = currentImageIndex === lastIndex
    const index = shouldResetIndex ? 0 : currentImageIndex + 1
    setCurrentImageIndex(index)
  }

  return (
    <Wrapper width={width} height={height} fullWidth={fullWidth}>
      <Arrow direction='left' clickFunction={previousSlide} icon='arrow-left' />
      {children[currentImageIndex]}
      <Arrow direction='right' clickFunction={nextSlide} icon='arrow-right' />
    </Wrapper>
  )
}

Carousel.propTypes = {
  children: array,
  width: number,
  height: number,
  fullWidth: bool
}

Carousel.defaultProps = {
  children: [],
  width: 700,
  height: 400,
  fullWidth: false
}

const Arrow = ({ direction, clickFunction, icon }) => (
  <StyledArrow icon={icon} onClick={clickFunction} direction={direction} />
)

export const CarouselSlide = ({ children }) => {
  return <StyledSlide>{children}</StyledSlide>
}

CarouselSlide.propTypes = {
  children: oneOfType([string, array])
}
