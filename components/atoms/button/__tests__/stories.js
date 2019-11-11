/**
 * Button
 */

// React
import React from 'react'

import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'

// Assets
import { Button } from '../'
import Readme from '../README.md'

const options = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg'
}

export default {
  title: 'Atoms/Button',
  decorators: [withKnobs],
  component: Button,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => (
  <Button
    context='primary'
    outline={boolean('Outline', false)}
    shadow={boolean('Shadow', true)}
    size={select('Size', options, 'md', 'Other')}
  >
    {text('Button text', 'Button text')}
  </Button>
)

export const secondary = () => (
  <Button centre={boolean('Centre', true)} context='secondary' outline={boolean('Outline', false)}>
    {text('Button text', 'Button text')}
  </Button>
)

export const outline = () => (
  <Button centre={boolean('Centre', true)} context='info' outline={boolean('Outline', true)}>
    {text('Button text', 'Button text')}
  </Button>
)

export const large = () => (
  <Button centre={boolean('Centre', true)} context='primary' outline={boolean('Outline', false)}>
    {text('Button text', 'Button text')}
  </Button>
)
