/**
 * Page Heading
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { PageHeading } from './'
import Readme from './README.md'

storiesOf('Molecules/PageHeading', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <PageHeading
      heading='Page Heading'
      strapline='Strapline'
    />
  )
