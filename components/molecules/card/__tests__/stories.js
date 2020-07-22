/**
 * Card Stories
 */

// React
import React from 'react'

// Storybook
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// UI
import { Button, Card, CardBody, Column } from 'components'
import Readme from '../README.md'

export default {
  title: 'Molecules/Card',
  component: Card,
  decorators: [story => <Column md={4}>{story()}</Column>, Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    alt: 'Vizla',
    bordered: boolean('Bordered', true),
    footer: text('Footer', 'Footer'),
    image: '/card/vizla.jpg',
    title: text('Title', 'Title'),
    ...props
  }

  return <Card {...defaultProps} />
}

export const main = () => (
  <BaseComponent>
    <CardBody>{text('Content', 'Content')}</CardBody>
  </BaseComponent>
)

export const horizontal = () => (
  <BaseComponent horizontal={boolean('Horizontal', true)} title={text('Title', 'Horizontal')}>
    <CardBody>
      <p>{text('Content', 'content')}</p>
      <Button context='secondary'>Read more</Button>
    </CardBody>
  </BaseComponent>
)

export const noImage = () => (
  <BaseComponent image='' title={text('Title', 'No Image')}>
    <CardBody>
      <p>{text('Content', 'content')}</p>
    </CardBody>
  </BaseComponent>
)

export const longTitle = () => (
  <BaseComponent
    title={text(
      'Title',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar lectus enim, a porttitor ex tincidunt id. '
    )}
    titleNoWrap={boolean('No wrap', true)}
  >
    <CardBody>
      <p>{text('Content', 'content')}</p>
    </CardBody>
  </BaseComponent>
)
