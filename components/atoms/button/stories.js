/**
 * Button
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'

// Assets
import { Button } from './'
import Readme from './README.md'

const options = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg'
}

storiesOf('Atoms/Button', module)

  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Button
      context='primary'
      outline={boolean('Outline', false)}
      shadow={boolean('Shadow', true)}
      size={select('Size', options, 'md', 'Other')}
    >
      {text('Button text', 'Button text')}
    </Button>
  )

  .add('Secondary', () =>
    <Button
      centre={boolean('Centre', true)}
      context='secondary'
      outline={boolean('Outline', false)}
    >
      {text('Button text', 'Button text')}
    </Button>
  )

  .add('Outline', () =>
    <Button
      centre={boolean('Centre', true)}
      context='info'
      outline={boolean('Outline', true)}
    >
      {text('Button text', 'Button text')}
    </Button>
  )

  .add('Large', () =>
    <Button
      centre={boolean('Centre', true)}
      context='primary'
      outline={boolean('Outline', false)}
    >
      {text('Button text', 'Button text')}
    </Button>
  )
