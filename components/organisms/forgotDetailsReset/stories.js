/**
 * Forgot Details Reset
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { ForgotDetailsReset } from './'
import Readme from './README.md'

storiesOf('Organisms/Forgot Details Reset', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <ForgotDetailsReset
      change={() => {}}
      email=''
      submit={() => {}}
    />
  )
