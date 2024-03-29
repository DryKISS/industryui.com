/**
 * Carousel Slide
 */

// React
import React from 'react'
import { func, node, object } from 'prop-types'

// Style
import styled from 'styled-components'

const CarouselSlide = ({ children, onClick, style }) => {
  return (
    <StyledSlide onClick={onClick} style={style}>
      {children}
    </StyledSlide>
  )
}

const StyledSlide = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  user-select: none;
  img {
    width: 100%;
  }
`

CarouselSlide.propTypes = {
  children: node.isRequired,
  onClick: func,
  style: object
}

export default CarouselSlide
