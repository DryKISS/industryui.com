/**
 * Label
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Label, Select } from '../../'
import Readme from './README.md'

storiesOf('Atoms/Form/Label', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <>
      <Label text='Select your gender'>
        <Select
          id='gender'
          options={[
            { text: 'Male', value: 'male', disabled: false },
            { text: 'Female', value: 'female', disabled: false },
            { text: 'Unknown (disabled)', value: 'unknown', disabled: true }
          ]}
        />
      </Label>
    </>
  )
