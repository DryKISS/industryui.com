/**
 * Form
 */

// React
import React from 'react'

// UI
import { Button, Form, Input } from 'components/atoms'
import Readme from '../README.md'

export default {
  title: 'Atoms/Form/Form',
  component: Form,
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
