/**
 * Stepper
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Stepper } from 'components'
import Readme from '../README.md'

// Data
import { Data, Data2 } from '../__mocks__/data'

export default {
  title: 'Molecules/Stepper',
  component: Stepper,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Stepper items={Data.items} summary={Data.summary} />
export const DeActiveItems = () => <Stepper items={Data2.items} summary={Data.summary} />
