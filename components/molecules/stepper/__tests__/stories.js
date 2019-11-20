/**
 * Stepper
 */

// React
import React from 'react'

// UI
import { Stepper } from 'components'
import Readme from '../README.md'

// Data
import { Data } from '../__mocks__/data'

export default {
  title: 'Molecules/Stepper',
  component: Stepper,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Stepper items={Data.items} timings={Data.timings} />
