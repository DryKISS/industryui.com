/**
 * Components - Form - Textarea - Story
 */

// React
import React from 'react'

// Storybook
import SizeControl from '../../../../.storybook/decorators/controls/size'
import FormWrapper from '../../../../.storybook/decorators/wrapper/form'

// Yup
import { object, string } from 'yup'

// UI
import Textarea from '../textarea'
import Readme from '../README.md'

const schema = object().shape({
  textarea: string().required()
})

export default {
  args: {
    name: 'textarea',
    rows: 5
  },
  argTypes: {
    size: SizeControl()
  },
  component: Textarea,
  decorators: [FormWrapper],
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    },
    schema: schema
  },
  title: 'Form/Textarea'
}

export const Main = (args, { params: { formState, register } }) => {
  return <Textarea {...args} errors={formState.errors} register={register} />
}
