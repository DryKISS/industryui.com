/**
 * Radio
 */

// React
import React from 'react'

// Storybook
import { withKnobs, select } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// UI
import { Radio } from '../'
import Readme from '../README.md'

// Data
import { RADIO_GENDER } from '../__mocks__/radio'

export default {
  title: 'Atoms/Form/Radio',
  component: Radio,
  decorators: [Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    change: () => {},
    data: RADIO_GENDER(
      select(
        'Checked',
        {
          no: 'no',
          male: 'male',
          female: 'female'
        },
        'no'
      )
    ),
    ...props
  }

  return <Radio {...defaultProps} />
}

export const main = () => <BaseComponent />
export const stacked = () => <BaseComponent stacked />
