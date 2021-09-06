/**
 * Components - Utils - Validator - Post Code
 */

// React
import React, { useState } from 'react'

// React Hook Form
import { useForm } from 'react-hook-form'

// UI
import postCodeValidate from '../validate'
import Button from '../../../../atoms/button/button/button'
import Text from '../../../../atoms/text/text'
import Form from '../../../../form/form/form'
import FormField from '../../../../form/field/input'
import FormLabel from '../../../../form/label/label'
import Readme from '../README.md'

export default {
  component: postCodeValidate,
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
    const valid = postCodeValidate(data.postCode)
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
