/**
 * Carousel Slide
 */

// React
import React from 'react'
import { node } from 'prop-types'

// Style
import styled from 'styled-components'

export const CarouselSlide = ({ children, ...props }) => {
  return <StyledSlide {...props}>{children}</StyledSlide>
}

const StyledSlide = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  img {
    width: 100%;
  }
`

CarouselSlide.propTypes = {
  children: node
}
