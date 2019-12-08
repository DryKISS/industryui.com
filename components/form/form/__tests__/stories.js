/**
 * Form - Form
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Button, Form, Input } from 'components'
import Readme from '../README.md'

export default {
  title: 'Form/Form',
  component: Form,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => (
  <Form submit={() => {}}>
    <Input
      change={() => {}}
      label='Email'
      id='email'
      placeholder='Enter email address'
      type='email'
    />

    <Button secondary type='submit'>
      Send reset link
    </Button>
  </Form>
)
