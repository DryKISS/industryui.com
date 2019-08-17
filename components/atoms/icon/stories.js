/**
 * Icon
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Icon } from './'
import Readme from './README.md'

storiesOf('Atoms/Icon', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Icon icon='times-circle' />
  )
