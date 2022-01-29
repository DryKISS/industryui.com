/**
 * Components - Form - Dropzone
 */

// React
import React from 'react'

// Storybook
import FormWrapperControl from '../../../../.storybook/decorators/wrapper/formControl'

// Yup
import { object, string } from 'yup'

// UI
import DropzoneController from '../controller'
import Error from '../../error/error'
import Readme from '../README.md'

const schema = object().shape({
  dropzone: string().required()
})

export default {
  component: DropzoneController,
  decorators: [FormWrapperControl],
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
  const onChange = (change) => {
    console.info('Changed', change)
  }

  return (
    <>
      <DropzoneController
        {...args}
        accept="image/*"
        control={control}
        errors={formState.errors}
        multiple={true}
        onChange={onChange}
      />
      <Error message={formState.errors?.dropzone?.message || ''} />
    </>
  )
}
