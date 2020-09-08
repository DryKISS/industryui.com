/**
 * Label
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Label } from '../../'
import Readme from '../README.md'

export default {
  title: 'Form/Controlled/Label',
  component: Label,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Label children='' text='Label' />
