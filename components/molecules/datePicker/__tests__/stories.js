/**
 * Date Picker
 */

// React
import React from 'react'

// UI
import { DatePicker } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Date Picker',
  component: DatePicker,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => <DatePicker change={() => {}} month='' year='' />

defaultStory.story = {
  name: 'Default'
}
