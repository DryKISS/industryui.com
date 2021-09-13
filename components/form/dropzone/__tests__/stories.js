/**
 * React Select
 */

// React
import React from 'react'

// Storybook
import FormWrapper from '../../../../.storybook/decorators/wrapper/form'

// Yup
import { object, string } from 'yup'

// UI
import DropzoneController from '../controller'
import Readme from '../README.md'

const schema = object().shape({
  dropzone: string().required()
})

export default {
  component: DropzoneController,
  decorators: [FormWrapper],
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    },
    schema: schema
  },
  title: 'Form/Dropzone'
}

export const Main = (args, { params: { control, formState } }) => {
  return (
    <DropzoneController {...args} accept="image/*" control={control} errors={formState.errors} />
  )
}
