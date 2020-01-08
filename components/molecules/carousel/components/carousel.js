/**
 * Carousel
 */

// React
import React, { useState } from 'react'
import { array, bool, string } from 'prop-types'

// Style
import styled from 'styled-components'
import CarouselArrow from './arrow'

const Wrapper = styled.div`
  height: ${({ height }) => height};
  min-height: ${({ height }) => height};
  margin: 0;
  position: relative;
  width: ${({ width, fullWidth }) => (fullWidth ? '100%' : width)};
`

export const Carousel = ({ children, fullWidth, height, leftArrowIcon, rightArrowIcon, width }) => {
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
      <CarouselArrow direction='left' clickFunction={previousSlide} icon={leftArrowIcon} />
      {children[currentImageIndex] || children}
      <CarouselArrow direction='right' clickFunction={nextSlide} icon={rightArrowIcon} />
    </Wrapper>
  )
}

Carousel.propTypes = {
  children: array,
  fullWidth: bool,
  height: string,
  leftArrowIcon: string,
  rightArrowIcon: string,
  width: string
}

Carousel.defaultProps = {
  children: [],
  fullWidth: false,
  leftArrowIcon: 'chevron-left',
  rightArrowIcon: 'chevron-right'
}
