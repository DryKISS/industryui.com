/**
 * Carousel
 */

// Storybook
import { ContextControl } from 'decorators'

// Style
import styled from 'styled-components'

// UI
import { Carousel, CarouselSlide, Image, ReactHolderJs } from 'components'
import { CarouselSampleSlide } from '../components/sample'
import Readme from '../README.md'
import vizla from 'storybook/static/card/vizla.jpg'

export default {
  args: {
    arrowContext: 'black',
    arrowPosition: 'middle',
    fullWidth: false,
    showArrows: false,
    showPagination: false
  },
  argTypes: {
    arrowContext: ContextControl(),
    arrowPosition: { control: { type: 'select', options: ['top', 'middle', 'bottom'] } }
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
    node={<ReactHolderJs src='./img/test1.jpg' width={900} height={300} usePlaceholder />}
  />
)

const BaseComponent = props => {
  const defaultProps = {
    height: '300px',
    width: '900px',
    ...props
  }
  return <Carousel {...defaultProps} />
}

export const main = args => (
  <BaseComponent {...args}>
    <SampleSlide />

    <SampleSlide title='Another Slide' />
  </BaseComponent>
)

export const withArray = args => (
  <BaseComponent
    {...args}
    slides={[
      {
        context: 'light',
        img: vizla,
        text: 'Sample text from Array Carousel'
      },
      {
        node: <ReactHolderJs src='./img/test1.jpg' width={900} height={300} usePlaceholder />,
        text: 'Another text from Array Carousel'
      }
    ]}
  />
)

export const withPagination = args => (
  <BaseComponent {...args}>
    <SampleSlide />

    <SampleSlide title='Another Slide' />

    <SampleSlide title='Another Third Slide' />
  </BaseComponent>
)

export const withImageComponent = args => (
  <BaseComponent {...args}>
    <CarouselSlide>
      <TextLabel>With Image Component</TextLabel>
      <Image src={vizla} />
    </CarouselSlide>

    <SampleSlide />
  </BaseComponent>
)

export const withHTMLImageTag = args => (
  <BaseComponent {...args}>
    <CarouselSlide>
      <TextLabel>With HTML Image Tag</TextLabel>
      <img src={vizla} />
    </CarouselSlide>

    <SampleSlide />
  </BaseComponent>
)

export const withJustText = args => (
  <BaseComponent {...args}>
    <CarouselSlide style={{ width: '100%', height: '300px' }}>this is text div</CarouselSlide>

    <SampleSlide />
  </BaseComponent>
)

export const withJustOneItem = args => (
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
