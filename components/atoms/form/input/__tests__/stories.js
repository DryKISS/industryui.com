/**
 * Input
 */

// React
import React from 'react'

// Storybook
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// UI
import { Input } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/Form/Input',
  component: Input,
  decorators: [Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => (
  <Input
    change={() => {}}
    id='main'
    label={text('Label', 'Email')}
    placeholder={text('Placeholder', 'Enter your email')}
    readOnly={boolean('Read only', false)}
  />
)

export const noLabel = () => <Input change={() => {}} placeholder='Enter your email' />
