/**
 * Breadcrumb
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Breadcrumb } from './'
import Readme from './README.md'

storiesOf('Molecules/Breadcrumb', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Breadcrumb
      category='Ian Warner'
      page='Home'
      path='/'
    />
  )
