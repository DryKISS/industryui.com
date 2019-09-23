/**
 * Domains
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Domains } from '../'
import Readme from '../README.md'

storiesOf('Pages/Domains', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Domains />
  )
