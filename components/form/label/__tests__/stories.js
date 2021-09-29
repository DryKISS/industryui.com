/**
 * Components - Form - Label
 */

// React
import React from 'react'

// UI
import Label from '../label'
import Readme from '../README.md'

export default {
  args: {
    label: 'Test Label'
  },
  component: Label,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Form/Label'
}

export const main = (args) => <Label {...args} />
