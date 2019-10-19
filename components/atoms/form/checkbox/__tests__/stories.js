/**
 * Checkbox
 */

// React
import React from 'react'

import { action } from '@storybook/addon-actions'

// UI
import { Checkbox } from '../'
import Readme from '../README.md'

const CHECKBOXS = [
  {
    id: 'insurance',
    // isChecked: ownedToggle === true,
    label: 'I pledge to get insurance for my new dog',
    required: true,
    value: 'Insurance'
  }
]

export default {
  title: 'Atoms/Form/Checkbox',
  component: Checkbox,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => (
  <Checkbox
    data={CHECKBOXS}
    legend='Finally, which of the following do you pledge to do for your new dog?'
    change={action('button-click')}
  />
)

defaultStory.story = {
  name: 'Default'
}
