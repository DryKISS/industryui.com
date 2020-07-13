/**
 * Carousel
 */

// React
import React from 'react'

// Storybook
import { Context, Wrapper } from 'decorators'
import { boolean, select, withKnobs } from '@storybook/addon-knobs'

// Style
import styled from 'styled-components'

// UI
import { Carousel, CarouselSlide, Image, ReactHolderJs } from '../../../'
import Readme from '../README.md'
import vizla from 'storybook/static/card/vizla.jpg'

export default {
  title: 'Molecules/Carousel',
  component: Carousel,
  decorators: [Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const SampleSlide = ({ title = 'Sample Slide' }) => (
  <CarouselSlide>
    <TextLabel>{title}</TextLabel>
    <ReactHolderJs src='./img/test1.jpg' width={900} height={300} usePlaceholder />
  </CarouselSlide>
)

const BaseComponent = props => {
  const defaultProps = {
    arrowContext: Context(null, 'black', 'Arrow context'),
    arrowPosition: select(
      'Arrow position',
      {
        Top: 'top',
        Middle: 'middle',
        Bottom: 'bottom'
      },
      'middle'
    ),
    fullWidth: boolean('Full width', true),
    ...props
  }
  return <Carousel {...defaultProps} />
}

export const main = () => (
  <BaseComponent>
    <SampleSlide />

    <SampleSlide title='Another Slide' />
  </BaseComponent>
)

export const withImageComponent = () => (
  <BaseComponent>
    <CarouselSlide>
      <TextLabel>With Image Component</TextLabel>
      <Image src={vizla} />
    </CarouselSlide>

    <SampleSlide />
  </BaseComponent>
)

export const withHTMLImageTag = () => (
  <BaseComponent>
    <CarouselSlide>
      <TextLabel>With HTML Image Tag</TextLabel>
      <img src={vizla} />
    </CarouselSlide>

    <SampleSlide />
  </BaseComponent>
)

export const withJustText = () => (
  <BaseComponent>
    <CarouselSlide style={{ width: '100%', height: '300px' }}>this is text div</CarouselSlide>

    <SampleSlide />
  </BaseComponent>
)

export const withJustOneItem = () => (
  <BaseComponent>
    <SampleSlide />
  </BaseComponent>
)

const TextLabel = styled.span`
  color: white;
  font-size: 24px;
  padding: 2em;
  position: absolute;
  text-shadow: 2px 2px #000;
`
