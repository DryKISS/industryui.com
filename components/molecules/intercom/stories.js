/**
 * Intercom
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// Hero
import { Intercom } from './'
import Readme from './README.md'

storiesOf('Molecules/Intercom', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Intercom appID='12345' />
  )
