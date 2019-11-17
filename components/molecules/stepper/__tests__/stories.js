/**
 * Stepper
 */

// React
import React from 'react'

// UI
import { Stepper } from 'components'
import Readme from '../README.md'

// Data
import { Items } from '../__mocks__/items'

export default {
  title: 'Molecules/Stepper',
  component: Stepper,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Stepper items={Items} />
