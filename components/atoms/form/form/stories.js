/**
 * Form
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Form, Button, Input } from '../../'
import Readme from './README.md'

storiesOf('Atoms/Form/Form', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Form submit={() => {}}>

      <Input
        change={() => {}}
        label='Email'
        id='email'
        placeholder='Enter email address'
        type='email'
      />

      <Button secondary type='submit'>Send reset link</Button>

    </Form>
  )
