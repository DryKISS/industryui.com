/**
 * Carousel
 */

// React
import React, { useState } from 'react'

// Storybook
import ContextControl from '../../../../.storybook/decorators/controls/context'
import { CarouselDefaultProps } from '../components/props'

// Style
import styled from 'styled-components'

// UI
import Button from '../../../atoms/button/button/button'
import Carousel from '../carousel'
import Holder from '../../../utils/holder/holder'
import CarouselSlide from '../components/slide'
import CarouselSampleSlide from '../components/sample'
import Readme from '../README.md'

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
  <CarouselSampleSlide text={title} node={<Holder width={900} height={300} />} />
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

export const WithCustomPagination = () => {
  const slideData = ['One', 'Two', 'Three', 'Four']
  const [currentPage, setCurrentPage] = useState(1)

  const Slide = () => (
    <div>
      <p>Top</p>

      <br />

      <p>Bottom</p>
    </div>
  )

  const defaultProps = {
    height: '300px',
    width: '900px',
    numberOfItems: 1,
    showNavs: false,
    showPagination: true,
    defaultSlide: currentPage,
    slides: (slideData || []).map((item) => ({
      node: <Slide {...item} />,
      text: ' '
    })),
    paginationProps: {
      onPageChange: (index) => {
        setCurrentPage(index)
      },
      currentPage
    }
  }

  return <Carousel {...defaultProps} />
}

export const withArray = (args) => (
  <BaseComponent
    {...args}
    slides={[
      {
        context: 'light',
        img: <Holder width={900} height={300} />,
        text: 'Sample text from Array Carousel'
      },
      {
        node: <Holder width={900} height={300} />,
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
        img: <Holder width={900} height={300} />,
        text: 'Sample text from Array Carousel'
      },
      {
        node: <Holder width={900} height={300} />,
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

// Sample use of custom Pagination
const CustomPagination = ({ size, active, label, onClick }) => {
  return (
    <Button context={active ? 'info' : 'primary'} onClick={onClick}>
      {label}
    </Button>
  )
}

export const customPagination = (args) => (
  <BaseComponent {...{ ...args, showPagination: true, paginationProps: { CustomPagination } }}>
    <SampleSlide />
    <SampleSlide />
  </BaseComponent>
)

export const withImageComponent = (args) => (
  <BaseComponent {...args}>
    <CarouselSlide>
      <TextLabel>With Image Component</TextLabel>
      <Holder width={900} height={300} />
    </CarouselSlide>

    <SampleSlide />
  </BaseComponent>
)

export const withHTMLImageTag = (args) => (
  <BaseComponent {...args}>
    <CarouselSlide>
      <TextLabel>With HTML Image Tag</TextLabel>
      <Holder width={900} height={300} />
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
