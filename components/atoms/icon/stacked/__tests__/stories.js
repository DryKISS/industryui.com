/**
 * Icon
 */

// React
import React from 'react'

// UI
import IconStacked from '../stacked'
import Readme from '../README.md'

export default {
  component: IconStacked,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Atoms/Icon/Stacked'
}

export const main = () => <IconStacked icon="envelope" />
