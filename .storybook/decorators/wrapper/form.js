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
import Button from '../../../components/atoms/button/button/button'
import Divider from '../../../components/atoms/divider/divider'
import Form from '../../../components/form/form/form'
import Text from '../../../components/atoms/text/text'

const FormWrapper = (Story, props) => {
  const { formState, getValues, handleSubmit, register } = useForm({
    resolver: yupResolver(props.parameters.schema)
  })

  const onSubmit = data => console.log('Submitted:', data)

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <Story params={{formState, register}} />

      <Divider />

      <Button content="Submit" type="submit" />

      <Divider />
    </Form>
  )
}

export default FormWrapper
