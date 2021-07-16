/**
 * Form - Field
 */

// React
import React from 'react'

// Storybook
import { SizeControl } from '../../../../.storybook/decorators/size'

// React Hook Form
import { useForm } from 'react-hook-form'

// Yup
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// UI
import Button from '../../../atoms/button/button/button'
import Form from '../../form/form'
import FormLabel from '../../label/label'
import TextareaField from '../textarea'
import Readme from '../README.md'

export default {
  args: {
    name: 'textarea',
    rows: 1
  },
  argTypes: {
    size: SizeControl()
  },
  component: TextareaField,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Form/Textarea'
}

const schema = object().shape({
  textarea: string().required()
})

export const Main = (args) => {
  const { errors, handleSubmit, register } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    console.info(data)
  }

  const defaultProps = {
    errors: errors,
    register: register,
    ...args
  }

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <FormLabel label="Description">
        <TextareaField {...defaultProps} />
      </FormLabel>

      <Button content="Submit" type="submit" />
    </Form>
  )
}
