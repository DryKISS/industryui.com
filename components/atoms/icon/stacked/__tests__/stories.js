/**
 * Icon
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { IconStacked } from 'root'
import Readme from '../README.md'

export default {
  title: 'Atoms/Icon/Stacked',
  component: IconStacked,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <IconStacked icon='envelope' />
