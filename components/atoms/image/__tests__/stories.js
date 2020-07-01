/**
 * Image
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Image } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/Image',
  component: Image,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Image alt='Ian Warner' src='http://via.placeholder.com/350x150' />
