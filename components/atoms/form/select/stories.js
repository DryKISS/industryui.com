/**
 * Select
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Select } from './'
import Readme from './README.md'

storiesOf('Atoms/Form/Select', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Select
      id='color'
      data={[
        { text: 'Red', value: 'red', disabled: false },
        { text: 'Green', value: 'green', disabled: false },
        { text: 'Blue', value: 'blue', disabled: false },
        { text: 'Olive (disabled)', value: 'olive', disabled: true }
      ]}
    />
  )
