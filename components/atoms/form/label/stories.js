/**
 * Label
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Label } from './'
import Readme from './README.md'

storiesOf('Atoms/Form/Label', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Label children='' text='Select your gender' />
  )
