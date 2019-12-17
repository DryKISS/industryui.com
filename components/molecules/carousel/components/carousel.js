/**
 * Carousel
 */

// React
import React, { useState } from 'react'
import { array, bool, node, number } from 'prop-types'

// Style
import styled from 'styled-components'
import { Icon } from '../../../'

const Wrapper = styled.div`
  height: ${({ height }) => `${height}px`};
  min-height: ${({ height }) => `${height}px`};
  margin: 0;
  position: relative;
  width: ${({ width, fullWidth }) => (fullWidth ? '100%' : `${width}px`)};
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
  fullWidth: bool,
  height: number,
  width: number
}

Carousel.defaultProps = {
  children: [],
  fullWidth: false
}

const Arrow = ({ direction, clickFunction, icon }) => (
  <StyledArrow icon={icon} onClick={clickFunction} direction={direction} />
)

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

export const CarouselSlide = ({ children }) => {
  return <StyledSlide>{children}</StyledSlide>
}

const StyledSlide = styled.div`
  height: 100%;
  width: 100%;
  img {
    width: 100%;
  }
`

CarouselSlide.propTypes = {
  children: node
}
