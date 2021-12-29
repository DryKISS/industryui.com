/**
 * Components - Organisms  - Qrcode
 */

// React
import React from 'react'

// UI
import Qrcode from '../qrcode'
import Readme from '../README.md'

export default {
  args: {
    assetId: 1,
    path: 'http://'
  },
  component: Qrcode,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/Qrcode'
}

export const main = (args) => <Qrcode {...args} />
