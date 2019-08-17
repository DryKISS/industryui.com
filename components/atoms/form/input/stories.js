/**
 * Input
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Input } from '../'
import Readme from './README.md'

storiesOf('Atoms/Form/Input', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Input
      change={() => {}}
      label='Email'
      placeholder='Enter your email'
    />
  )
