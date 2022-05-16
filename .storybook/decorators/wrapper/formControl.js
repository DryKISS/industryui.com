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


const FormWrapper = (Story, props) => {
  const { control, formState, getValues, handleSubmit, setValue, watch } = useForm({
    resolver: yupResolver(props.parameters.schema)
  })

  const onSubmit = data => console.log('Submitted:', data)

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <Story params={{control, formState, getValues, setValue, watch}} />

      <Divider />

      <Button content="Submit" type="submit" />
    </Form>
  )
}

export default FormWrapper
