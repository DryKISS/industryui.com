/**
 * Components - Form - Radio - Story
 */

// React
import React from 'react'

// React Hook Form
import { useForm } from 'react-hook-form'

// UI
import { Button, Form, RadioField } from '../../../'
import Readme from '../README.md'

// Data
import { RADIO_GENDER } from '../__mocks__/radio'

export default {
  args: {
    legend: 'Gender?',
    stacked: false
  },
  component: RadioField,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Form/Radio'
}

const BaseComponent = (props = {}) => {
  const { errors, handleSubmit, register } = useForm()
  const onSubmit = (data) => {}

  const defaultProps = {
    errors: errors,
    name: 'radio',
    register: register,

    ...props
  }

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <RadioField {...defaultProps} data={RADIO_GENDER()} />
      <Button content="Submit" type="submit" />
    </Form>
  )
}

export const main = (args) => <BaseComponent {...args} />
