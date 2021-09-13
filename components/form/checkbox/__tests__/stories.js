/**
 * Form - Checkbox
 */

// React
import React from 'react'

// Storybook
import FormWrapper from '../../../../.storybook/decorators/wrapper/form'

// Yup
import { object, string } from 'yup'

// UI
import Checkbox from '../checkbox'
import Readme from '../README.md'
import DATA from '../__mocks__/checkbox'

const schema = object().shape({
  checkbox: string().required()
})

export default {
  component: Checkbox,
  decorators: [FormWrapper],
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    },
    schema: schema
  },
  title: 'Form/Checkbox'
}

export const Main = (args, { params: { formState, register } }) => (
  <Checkbox {...args} errors={formState.errors} data={DATA} name="checkbox" register={register} />
)
