/**
 * Components - Form - Radio - Story
 */

// React
import React from 'react'

// Storybook
import FormWrapper from '../../../../.storybook/decorators/wrapper/form'

// Yup
import { object, string } from 'yup'

// UI
import Radio from '../radio'
import Readme from '../README.md'

// Data
import RADIO_GENDER from '../__mocks__/radio'

const schema = object().shape({
  radio: string().required()
})

export default {
  args: {
    legend: 'Gender?',
    stacked: false
  },
  component: Radio,
  decorators: [FormWrapper],
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    },
    schema: schema
  },
  title: 'Form/Radio'
}

export const Main = (args, { params: { formState, register } }) => {
  return (
    <Radio
      {...args}
      data={RADIO_GENDER()}
      errors={formState.errors}
      name="radio"
      register={register}
    />
  )
}
