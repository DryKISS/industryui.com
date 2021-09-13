/**
 * form Wrapper
 */

// React
import React from 'react'

// React Hook Form
import { useForm } from 'react-hook-form'

// Yup
import { yupResolver } from '@hookform/resolvers/yup'

// UI
import Form from '../../../components/form/form/form'
import Button from '../../../components/atoms/button/button/button'

const FormWrapper = (Story, props) => {
  const { control, formState, handleSubmit, register, watch } = useForm({
    resolver: yupResolver(props.parameters.schema)
  })

  const onSubmit = data => console.log('Submitted:', data)

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <Story params={{control, formState, register}} />
      <Button content="Submit" type="submit" />
    </Form>
  )
}

export default FormWrapper
