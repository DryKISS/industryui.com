/**
 * Select
 */

// React
import React from 'react'

// UI
import { Select } from '../'
import Readme from '../README.md'

export default {
  title: 'Atoms/Form/Select',
  component: Select,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => (
  <Select
    id='color'
    data={[
      { text: 'Red', value: 'red', disabled: false },
      { text: 'Green', value: 'green', disabled: false },
      { text: 'Blue', value: 'blue', disabled: false },
      { text: 'Olive (disabled)', value: 'olive', disabled: true }
    ]}
  />
)

defaultStory.story = {
  name: 'Default'
}
