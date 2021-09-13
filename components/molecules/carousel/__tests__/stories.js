/**
 * Carousel
 */

// React
import React from 'react'

// Storybook
import ContextControl from '../../../../.storybook/decorators/controls/context'
import { CarouselDefaultProps } from '../components/props'

// Style
import styled from 'styled-components'

// UI
import Button from '../../../atoms/button/button/button'
import Carousel from '../carousel'
import Image from '../../../atoms/image/image'
import ReactHolderJs from '../../../utils/holder/reactHolder'
import CarouselSlide from '../components/slide'
import CarouselSampleSlide from '../components/sample'
import Readme from '../README.md'
import vizla from '../../../../static/card/vizla.jpg'

export default {
  args: CarouselDefaultProps,
  argTypes: {
    navContext: ContextControl(),
    navPosition: {
      control: { type: 'select', options: ['top', 'middle', 'bottom'] }
    },
    autoplayInterval: { name: 'autoplay Interval(ms)' },
    gap: {
      name: 'gap between elements(px)',
      control: { type: 'range', min: 1, max: 200 }
    }
  },

  title: 'Molecules/Carousel',
  component: Carousel,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

const SampleSlide = ({ title = 'Sample Slide' }) => (
  <CarouselSampleSlide
    text={title}
    node={<ReactHolderJs src="./img/test1.jpg" width={900} height={300} usePlaceholder />}
  />
)

const BaseComponent = (props) => {
  const defaultProps = {
    height: '300px',
    width: '900px',
    numberOfItems: {
      600: 1,
      1200: 3,
      1400: 8,
      1600: 10,
      4000: 12
    },
    ...props
  }
  return <Carousel {...defaultProps} />
}

export const main = (args) => (
  <BaseComponent {...args}>
    <SampleSlide />

    <SampleSlide title="Another Slide" />
  </BaseComponent>
)

export const withArray = (args) => (
  <BaseComponent
    {...args}
    slides={[
      {
        context: 'light',
        img: vizla,
        text: 'Sample text from Array Carousel'
      },
      {
        node: <ReactHolderJs src="./img/test1.jpg" width={900} height={300} usePlaceholder />,
        text: 'Another text from Array Carousel'
      }
    ]}
  />
)

export const withCustomNav = (args) => (
  <BaseComponent
    {...args}
    showNavs
    leftNavComponent={<Button size="sm">{'<'}</Button>}
    rightNavComponent={<Button size="sm">next</Button>}
    slides={[
      {
        context: 'light',
        img: vizla,
        text: 'Sample text from Array Carousel'
      },
      {
        node: <ReactHolderJs src="./img/test1.jpg" width={900} height={300} usePlaceholder />,
        text: 'Another text from Array Carousel'
      }
    ]}
  />
)

export const withPagination = (args) => (
  <BaseComponent {...args}>
    <SampleSlide title="1" />

    <SampleSlide title="2" />

    <SampleSlide title="3" />
    <SampleSlide title="4" />
    <SampleSlide title="5" />
    <SampleSlide title="6" />
    <SampleSlide title="7" />
  </BaseComponent>
)

export const withImageComponent = (args) => (
  <BaseComponent {...args}>
    <CarouselSlide>
      <TextLabel>With Image Component</TextLabel>
      <Image src={vizla} />
    </CarouselSlide>

    <SampleSlide />
  </BaseComponent>
)

export const withHTMLImageTag = (args) => (
  <BaseComponent {...args}>
    <CarouselSlide>
      <TextLabel>With HTML Image Tag</TextLabel>
      <img src={vizla} />
    </CarouselSlide>

    <SampleSlide />
  </BaseComponent>
)

export const withJustText = (args) => (
  <BaseComponent {...args}>
    <CarouselSlide style={{ width: '100%', height: '300px' }}>this is text div</CarouselSlide>

    <SampleSlide />
  </BaseComponent>
)

export const withJustOneItem = (args) => (
  <BaseComponent {...args}>
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
