/**
 * Avatar
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Avatar } from './'
import Readme from './README.md'

storiesOf('Atoms/Avatar', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Avatar content='Avatar' />
  )
