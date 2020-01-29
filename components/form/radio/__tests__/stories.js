/**
 * Form - Radio
 */

// React
import React from 'react'

// Storybook
import { text, withKnobs } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// useForm
import { useForm } from 'react-hook-form'

// UI
import { Button, FormForm, RadioField } from '../../../../'
import Readme from '../README.md'

// Data
import { RADIO_GENDER } from '../__mocks__/radio'

export default {
  title: 'Form/Radio',
  component: RadioField,
  decorators: [Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const { errors, handleSubmit, register } = useForm()
  const onSubmit = data => {}

  const defaultProps = {
    errors: errors,
    name: 'radio',
    legend: text('Legend', 'Gender?'),
    required: 'This is required',
    register: register,
    ...props
  }

  return (
    <FormForm handleSubmit={handleSubmit(onSubmit)}>
      <RadioField {...defaultProps} data={RADIO_GENDER()} required='This is required' />
      <Button content='Submit' type='submit' />
    </FormForm>
  )
}

export const main = () => <BaseComponent />
export const stacked = () => <BaseComponent stacked />
