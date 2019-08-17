/**
 * Copyright
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Copyright } from './'
import Readme from './README.md'

// Data
import { COPYRIGHT } from './__mocks__'

storiesOf('Molecules/Copyright', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Copyright
      brand='Compnay Name'
      links={COPYRIGHT}
    />
  )
