/**
 * Location
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// Hero
import { Location } from './'
import Readme from './README.md'

storiesOf('Molecules/Location', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Location apiKey='' location='Wimbledon' />
  )
