/**
 * Badge
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Badge } from '../'
import Readme from '../README.md'

storiesOf('Atoms/Badge', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Badge content='Ian Warner' />
  )
