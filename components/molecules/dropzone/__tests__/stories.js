/**
 * Dropzone
 */

// React
import React from 'react'

// UI
import { Dropzone } from '../'
import Readme from '../README.md'

// Storybook
import { Wrapper } from 'decorators'

export default {
  title: 'Molecules/Dropzone',
  component: Dropzone,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Dropzone />

export const allFiles = () => <Dropzone accept='' />

export const disabled = () => <Dropzone disabled />
