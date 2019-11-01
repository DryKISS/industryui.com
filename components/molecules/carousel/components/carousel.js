/**
 * Carousel
 */

// React
import React, { useState } from 'react';
import { oneOfType, string, array } from 'prop-types';

// styled-components
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: ${({ width }) => width};
  min-width: ${({ width }) => width};
  height: ${({ height }) => height};
  min-height: ${({ height }) => height};
  margin: 0;
`

const StyledArrow = styled.div`
  color: #000;
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  top: 50%;
  ${({ direction }) => (direction === 'left' ? 'left: 1rem;' : 'right: 1rem;')}
`

const StyledSlide = styled.div`
  height: 100%;
  width: 100%;
`

export const Carousel = ({ children, width, height }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const previousSlide = () => {
    const lastIndex = children.length - 1
    const shouldResetIndex = currentImageIndex === 0
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1
    setCurrentImageIndex(index)
  };

  const nextSlide = () => {
    const lastIndex = children.length - 1
    const shouldResetIndex = currentImageIndex === lastIndex
    const index = shouldResetIndex ? 0 : currentImageIndex + 1
    setCurrentImageIndex(index)
  };

  return (
    <Wrapper width={width} height={height}>
      <Arrow direction='left' clickFunction={previousSlide} glyph='&#9664;' />
      {children[currentImageIndex]}
      <Arrow direction='right' clickFunction={nextSlide} glyph='&#9654;' />
    </Wrapper>
  )
};

Carousel.propTypes = {
  children: array,
  width: string,
  height: string
}

Carousel.defaultProps = {
  children: [],
  width: '100%',
  height: '400px'
}

const Arrow = ({ direction, clickFunction, glyph }) => (
  <StyledArrow direction={direction} onClick={clickFunction}>
    {glyph}
  </StyledArrow>
)

export const CarouselSlide = ({ children }) => {
  return <StyledSlide>{children}</StyledSlide>
};

CarouselSlide.propTypes = {
  children: oneOfType([string, array])
}
