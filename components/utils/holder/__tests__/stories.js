/**
 * Components - Utils - Holder
 */

// React
import React from 'react'

// UI
import Holder from '../holder'
import Readme from '../README.md'

export default {
  component: Holder,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Utils/Holder'
}

export const Main = (args) => {
  return <Holder {...args} />
}

export const String = (args) => {
  return <Holder {...args} string />
}
