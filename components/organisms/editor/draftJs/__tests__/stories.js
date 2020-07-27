/**
 * Draft JS
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'
import Readme from '../README.md'

// UI
import { DraftJs } from 'components'

export default {
  title: 'Organisms/Editor',
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <DraftJs />
