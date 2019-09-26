/**
 * Error404
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Error404 } from '../'
import Readme from '../README.md'

storiesOf('Pages/Error404', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Error404 />
  )
