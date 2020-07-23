import React from 'react'
// Storybook
import { Wrapper } from 'decorators'
import Readme from '../README.md'

// UI
import { RichEditor } from '../components/richEditor'

export default {
  title: 'Molecules/RichEditor',
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <RichEditor></RichEditor>
