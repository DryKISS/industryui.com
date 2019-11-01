/**
 * Carousel
 */

// React
import React from 'react'

// Style
import styled from 'styled-components'

// UI
import { Carousel, CarouselSlide, PRCarousel, PRCarouselSlide } from '../'
import Readme from '../README.md'

import dog1 from '../__mocks__/images/dog1.jpg'
import dog2 from '../__mocks__/images/dog2.jpg'
import dog3 from '../__mocks__/images/dog3.jpg'
import dog4 from '../__mocks__/images/dog4.jpg'
import dog5 from '../__mocks__/images/dog5.jpg'

export default {
  title: 'Molecules/Carousel',
  component: Carousel,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => (
  <Carousel>
    <CarouselSlide>
      <TextLabel style={{ objectFit: 'contain' }}>objectFit: contain</TextLabel>
      <Image src={dog1} alt='' style={{ objectFit: 'contain', border: 'dotted lightgray' }} />
    </CarouselSlide>
    <CarouselSlide>
      <TextLabel>objectFit: cover</TextLabel>
      <Image src={dog2} alt='' style={{ border: 'dotted lightgray' }} />
    </CarouselSlide>
    <CarouselSlide>
      <TextLabel>objectFit: none</TextLabel>
      <Image src={dog3} alt='' style={{ objectFit: 'none' }} />
    </CarouselSlide>
    <CarouselSlide style={{ width: '100%', height: '300px' }}>this is text div</CarouselSlide>
    <CarouselSlide>
      <TextLabel>objectFit: cover</TextLabel>
      <Image src={dog4} alt='' />
    </CarouselSlide>
    <CarouselSlide>
      <TextLabel>objectFit: cover</TextLabel>
      <Image src={dog5} alt='' />
    </CarouselSlide>
  </Carousel>
)
defaultStory.story = {
  name: 'Default'
}

export const usePureReactCarousel = () => (
  <PRCarousel width={600} height={300}>
    <PRCarouselSlide>
      <TextLabel style={{ objectFit: 'contain' }}>objectFit: contain</TextLabel>
      <Image src={dog1} alt='' style={{ objectFit: 'contain', border: 'dotted lightgray' }} />
    </PRCarouselSlide>
    <PRCarouselSlide>
      <TextLabel>objectFit: cover</TextLabel>
      <Image src={dog2} alt='' style={{ border: 'dotted lightgray' }} />
    </PRCarouselSlide>
    <PRCarouselSlide>
      <TextLabel>objectFit: none</TextLabel>
      <Image src={dog3} alt='' style={{ objectFit: 'none' }} />
    </PRCarouselSlide>
    <PRCarouselSlide style={{ width: '100%', height: '300px' }}>this is text div</PRCarouselSlide>
    <PRCarouselSlide>
      <TextLabel>objectFit: cover</TextLabel>
      <Image src={dog4} alt='' />
    </PRCarouselSlide>
    <PRCarouselSlide>
      <TextLabel>objectFit: cover</TextLabel>
      <Image src={dog5} alt='' />
    </PRCarouselSlide>
  </PRCarousel>
)

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const TextLabel = styled.span`
  position: absolute;
  text-shadow: 2px 2px #000;
  color: white;
  font-size: 24px;
  padding: 2em;
`
