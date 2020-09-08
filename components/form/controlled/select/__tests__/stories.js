/**
 * Select
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { SelectCountry, SelectDogBreed, Select } from '../../'
import Readme from '../README.md'

export default {
  title: 'Form/Controlled/Select',
  component: Select,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => (
  <Select
    change={() => {}}
    id='color'
    options={[
      { text: 'Red', value: 'red', disabled: false },
      { text: 'Green', value: 'green', disabled: false },
      { text: 'Blue', value: 'blue', disabled: false },
      { text: 'Olive (disabled)', value: 'olive', disabled: true }
    ]}
  />
)

export const country = () => <SelectCountry change={() => {}} id='country' />

export const dogBreed = () => <SelectDogBreed change={() => {}} id='breed' />
