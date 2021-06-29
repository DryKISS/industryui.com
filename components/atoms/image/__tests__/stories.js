/**
 * Image
 */

// React
import React from 'react'

// UI
import Image from '../image'
import Readme from '../README.md'

export default {
  args: {
    alt: 'DryKISS',
    src: 'http://via.placeholder.com/350x150'
  },
  component: Image,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Atoms/Image'
}

export const main = (args) => <Image {...args} />
