/**
 * Label
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import { Label, Select, Form } from '../../'
import Readme from './README.md'

storiesOf('Atoms/Form/Label', module)

  .addDecorator(withReadme(Readme))

  .add('Default', withInfo()(() =>
    <>
      <Label text="Select your gender">
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
  )
