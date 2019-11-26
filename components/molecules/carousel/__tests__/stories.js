/**
 * Carousel
 */

// React
import React from 'react'

// Style
import styled from 'styled-components'

// UI
import { Carousel, CarouselSlide } from '../'
import Readme from '../README.md'
import Img from '../../../utils/react-holder'

export default {
  title: 'Molecules/Carousel',
  component: Carousel,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const width = '750px'
const height = '422px'
const renderImage = () => <Img src='./img/test1.jpg' width={width} height={height} usePlaceholder />

export const main = () => (
  <Carousel width={width} height={height}>
    <CarouselSlide>
      <TextLabel style={{ objectFit: 'contain' }}>objectFit: contain</TextLabel>
      {renderImage()}
    </CarouselSlide>
    <CarouselSlide>
      <TextLabel>objectFit: cover</TextLabel>
      {renderImage()}
    </CarouselSlide>
    <CarouselSlide>
      <TextLabel>objectFit: none</TextLabel>
      {renderImage()}
    </CarouselSlide>
    <CarouselSlide style={{ width: '100%', height: '300px' }}>this is text div</CarouselSlide>
    <CarouselSlide>
      <TextLabel>objectFit: cover</TextLabel>
      {renderImage()}
    </CarouselSlide>
    <CarouselSlide>
      <TextLabel>objectFit: cover</TextLabel>
      {renderImage()}
    </CarouselSlide>
  </Carousel>
)

// export const usePureReactCarousel = () => (
//   <PRCarousel width='600px' height='300px'>
//     <PRCarouselSlide>
//       <TextLabel style={{ objectFit: 'contain' }}>objectFit: contain</TextLabel>
//       {renderImage()}
//     </PRCarouselSlide>
//     <PRCarouselSlide>
//       <TextLabel>objectFit: cover</TextLabel>
//       {renderImage()}
//     </PRCarouselSlide>
//     <PRCarouselSlide>
//       <TextLabel>objectFit: none</TextLabel>
//       {renderImage()}
//     </PRCarouselSlide>
//     <PRCarouselSlide style={{ width: '100%', height: '300px' }}>this is text div</PRCarouselSlide>
//     <PRCarouselSlide>
//       <TextLabel>objectFit: cover</TextLabel>
//       {renderImage()}
//     </PRCarouselSlide>
//     <PRCarouselSlide>
//       <TextLabel>objectFit: cover</TextLabel>
//       {renderImage()}
//     </PRCarouselSlide>
//   </PRCarousel>
// )

const TextLabel = styled.span`
  color: white;
  font-size: 24px;
  padding: 2em;
  position: absolute;
  text-shadow: 2px 2px #000;
`
