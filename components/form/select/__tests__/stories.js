/**
 * Components - Form - Select - Story
 */

// React
import React from 'react'

// Storybook
import FormWrapper from '../../../../.storybook/decorators/wrapper/form'

// Yup
import { object, string } from 'yup'

// UI
import Select from '../../select/select'
import Readme from '../README.md'
import EXPENSES from '../__mocks__/expenses'

const schema = object().shape({
  select: string().required()
})

export default {
  component: Select,
  decorators: [FormWrapper],
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    },
    schema: schema
  },
  title: 'Form/Select'
}

export const Main = (args, { params: { formState, register } }) => {
  return (
    <Select
      {...args}
      data={{ name: 'fred' }}
      errors={formState.errors}
      name="select"
      options={EXPENSES}
      register={register}
    />
  )
}

export const Range = (args, { params: { formState, register } }) => {
  return (
    <Select
      {...args}
      errors={formState.errors}
      name="select"
      placeholder="Range"
      range={[20, 0]}
      register={register}
    />
  )
}
