/**
 * Carousel Sample Slide
 */

// React
import React from 'react'
import { node, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import CarouselSlide from './slide'
// import { Image, Text } from '../../../'
import Image from '../../../atoms/image/image'
import Text from '../../../atoms/text/text'

const CarouselSampleSlide = ({ context, img, node, text }) => {
  if (!img && !text) return null

  return (
    <CarouselSlide>
      {node}
      {text && <StyledText content={text} context={context} size="xl" />}
      {img && <Image src={img} />}
    </CarouselSlide>
  )
}

const StyledText = styled(Text)`
  position: absolute;
  top: 2em;
  left: 2em;
`

CarouselSampleSlide.propTypes = {
  context: string,
  img: string,
  node: node,
  text: string
}

CarouselSampleSlide.defaultProps = {
  context: 'dark'
}
export default CarouselSampleSlide
