/**
 * Avatar
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Address } from './'
import Readme from './README.md'

storiesOf('Atoms/Address', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Address
      county='Sussex'
      country='United Kingdom'
      line1='24 Accacia Road'
      line2='Grandhouse'
      line3='Bermondsey'
      postcode='W1 2N'
      town='London'
    />
  )
