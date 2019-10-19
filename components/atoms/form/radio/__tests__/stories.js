/**
 * Radio
 */

// React
import React from 'react'

import { withKnobs, select } from '@storybook/addon-knobs'

// UI
import { Radio } from '../'
import Readme from '../README.md'

// Data
import { RADIO_GENDER } from '../__mocks__/radio'

export default {
  title: 'Atoms/Form/Radio',
  component: Radio,
  decorators: [withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => (
  <Radio
    change={() => {}}
    data={RADIO_GENDER(
      select(
        'Checked',
        {
          no: 'no',
          male: 'male',
          female: 'female'
        },
        'no'
      )
    )}
  />
)

defaultStory.story = {
  name: 'Default'
}

export const stackedStory = () => (
  <Radio
    change={() => {}}
    data={RADIO_GENDER(
      select(
        'Checked',
        {
          no: 'no',
          male: 'male',
          female: 'female'
        },
        'no'
      )
    )}
    stacked
  />
)

stackedStory.story = {
  name: 'Stacked'
}
