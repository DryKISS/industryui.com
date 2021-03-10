/**
 * Components - Organisms - Bar - Tests - Overlay
 */

// React
import React from 'react'

// UI
import { BarOverlay } from '../components/overlay'
import Readme from '../README.md'

export default {
  args: {
    onClick: () => {},
    open: true,
    placement: 'left',
    variant: 'overlay',
    width: 15,
  },
  component: BarOverlay,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  title: 'Organisms/Bar/Overlay',
}

export const overlay = (args) => {
  return <BarOverlay {...args} />
}
