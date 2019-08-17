/**
 * Button
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs/react'

// Assets
import { Button } from './'
import Readme from './README.md'

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
      size={boolean('lg', false)}
    >
      {text('Button text', 'Button text')}
    </Button>
  )

  .add('Secondary', () =>
    <Button
      centre={boolean('Centre', true)}
      context='secondary'
      large={boolean('Large', false)}
      outline={boolean('Outline', false)}
    >
      {text('Button text', 'Button text')}
    </Button>
  )

  .add('Outline', () =>
    <Button
      centre={boolean('Centre', true)}
      context='info'
      large={boolean('Large', false)}
      outline={boolean('Outline', true)}
    >
      {text('Button text', 'Button text')}
    </Button>
  )

  .add('Large', () =>
    <Button
      centre={boolean('Centre', true)}
      context='primary'
      large={boolean('Large', true)}
      outline={boolean('Outline', false)}
    >
      {text('Button text', 'Button text')}
    </Button>
  )
