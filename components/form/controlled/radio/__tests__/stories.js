/**
 * Radio
 */

// React
import React from 'react'

// Storybook
import { select } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// UI
import { Radio } from '../../'
import Readme from '../README.md'

// Data
import { RADIO_GENDER } from '../__mocks__/radioControlled'

export default {
  title: 'Form/Controlled/Radio',
  component: Radio,
  decorators: [Wrapper],
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
