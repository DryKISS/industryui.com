/**
 * Hero
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// Hero
import { Hero } from '../../'
import Readme from './README.md'

storiesOf('Molecules/Hero', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Hero content='Find your best friend' />
    )
  )
