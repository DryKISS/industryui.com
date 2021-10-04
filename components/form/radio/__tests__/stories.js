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

const schema = object().shape({
  yes: string().required(),
  no: string().required()
})

export default {
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
    <>
      <Radio {...args} errors={formState.errors} label="Yes" name="yes" register={register} />
      <Radio {...args} errors={formState.errors} label="No" name="no" register={register} />
    </>
  )
}
