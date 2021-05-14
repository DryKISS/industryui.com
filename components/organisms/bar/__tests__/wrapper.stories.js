/**
 * Components - Organisms - Bar - Tests - Overlay
 */

// React
import React from 'react'

// UI
import BarWrapper from '../components/wrapper'
import Readme from '../README.md'

export default {
  component: BarWrapper,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Organisms/Bar/Wrapper'
}

export const wrapper = (args) => {
  return <BarWrapper {...args} />
}
