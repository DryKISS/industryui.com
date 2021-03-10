/**
 * Components - Utils - Validator - Post Code
 */

// React
import React, { useState } from 'react'

// React Hook Form
import { useForm } from 'react-hook-form'

// UI
import { Button, Form, FormField, FormLabel, Text, validatorPostCode } from '../../../../'

import Readme from '../README.md'

export default {
  component: validatorPostCode,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Utils/Validator/PostCode'
}

export const Main = () => {
  const { errors, handleSubmit, register, formState } = useForm()
  const [valid, setValid] = useState('')

  const onSubmit = (data) => {
    const valid = validatorPostCode(data.postCode)
    setValid(valid)
  }

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <Text>A valid UK postcode will look something like `SW192EZ`</Text>

      <FormLabel label="Post code">
        <FormField errors={errors} name="postCode" register={register} />
      </FormLabel>

      <Button content="Submit" type="submit" />

      {valid && <Text>valid</Text>}
      {!valid && formState.isSubmitted && <Text>not valid</Text>}
    </Form>
  )
}
