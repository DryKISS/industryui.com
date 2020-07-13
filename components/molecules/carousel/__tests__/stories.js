/**
 * Carousel
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// Style
import styled from 'styled-components'

// UI
import { Carousel, CarouselSlide, Image, ReactHolderJs } from '../../../'
import Readme from '../README.md'
import vizla from 'storybook/static/card/vizla.jpg'

export default {
  title: 'Molecules/Carousel',
  component: Carousel,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const renderImage = () => (
  <ReactHolderJs src='./img/test1.jpg' width={900} height={300} usePlaceholder />
)

const BaseComponent = ({ children }) => {
  return (
    <Carousel fullWidth>
      {children}
      <CarouselSlide>
        <TextLabel>Sample Slide</TextLabel>
        {renderImage()}
      </CarouselSlide>
      <CarouselSlide style={{ width: '100%', height: '300px' }}>this is text div</CarouselSlide>
    </Carousel>
  )
}

export const main = () => (
  <BaseComponent>
    <CarouselSlide>
      <TextLabel>Another Slide</TextLabel>
      {renderImage()}
    </CarouselSlide>
  </BaseComponent>
)

export const withImageComponent = () => (
  <BaseComponent>
    <CarouselSlide>
      <TextLabel>With Image Component</TextLabel>
      <Image src={vizla} />
    </CarouselSlide>
  </BaseComponent>
)

export const withHTMLImageTag = () => (
  <BaseComponent>
    <CarouselSlide>
      <TextLabel>With HTML Image Tag</TextLabel>
      <img src={vizla} />
    </CarouselSlide>
  </BaseComponent>
)

const TextLabel = styled.span`
  color: white;
  font-size: 24px;
  padding: 2em;
  position: absolute;
  text-shadow: 2px 2px #000;
`
