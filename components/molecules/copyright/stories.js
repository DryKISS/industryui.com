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
import { Copyright as Data } from './__mocks__/copyright'

const Decorator = storyFn =>
  <div style={{ bottom: '-4rem', position: 'relative' }}>
    {storyFn()}
  </div>

storiesOf('Molecules/Copyright', module)

  .addDecorator(Decorator)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Copyright
      brand='Compnay Name'
      links={Data}
    />
  )
