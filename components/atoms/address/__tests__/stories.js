/**
 * Address
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Address } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/Address',
  component: Address,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => (
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
