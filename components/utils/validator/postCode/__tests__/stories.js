/**
 * Utils - PostCode
 */

// React
import React, { useState } from 'react'

// Storybook
import { Wrapper } from 'decorators'

// useForm
import useForm from 'react-hook-form'

// UI
import { Button, FormForm, FormField, FormLabel, validatorPostCode } from 'components'
import Readme from '../README.md'

export default {
  title: 'Utils/Validator/PostCode',
  component: validatorPostCode,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => {
  const { errors, handleSubmit, register, formState } = useForm()
  const [valid, setValid] = useState('')

  const onSubmit = data => {
    const valid = validatorPostCode(data.postCode)
    setValid(valid)
  }

  return (
    <FormForm handleSubmit={handleSubmit(onSubmit)}>
      <p>A valid UK postcode will look something like `SW192EZ`</p>

      <FormLabel label='Post code'>
        <FormField errors={errors} name='postCode' register={register} />
      </FormLabel>

      <Button content='Submit' type='submit' />

      {valid && <p>valid</p>}
      {!valid && formState.isSubmitted && <p>not valid</p>}
    </FormForm>
  )
}
