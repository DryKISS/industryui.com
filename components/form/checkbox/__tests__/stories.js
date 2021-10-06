/**
 * Form - Checkbox
 */

// React
import React from 'react'

// Storybook
import FormWrapper from '../../../../.storybook/decorators/wrapper/form'

// Yup
import { array, bool, object } from 'yup'

// UI
import Checkbox from '../checkbox'
import Readme from '../README.md'

const schema = object().shape({
  checkbox: bool().oneOf([true], 'Accept checkbox'),
  checked: bool().oneOf([true], 'Accept checkbox'),
  pet: array().min(1)
})

export default {
  component: Checkbox,
  decorators: [FormWrapper],
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    },
    schema: schema
  },
  title: 'Form/Checkbox'
}

export const Main = (args, { params: { formState, register } }) => {
  return (
    <>
      <Checkbox
        {...args}
        errors={formState.errors}
        label="Yes"
        name="checkbox"
        register={register}
      />

      <Checkbox {...args} errors={formState.errors} label="No" name="checked" register={register} />
    </>
  )
}

export const Inline = (args, { params: { formState, register } }) => {
  return (
    <>
      <Checkbox
        {...args}
        errors={formState.errors}
        inline
        label="Yes"
        name="checkbox"
        register={register}
      />

      <Checkbox
        {...args}
        errors={formState.errors}
        inline
        label="No"
        name="checked"
        register={register}
      />
    </>
  )
}

export const Grouped = (args, { params: { formState, register } }) => {
  return (
    <>
      <Checkbox
        {...args}
        errors={formState.errors}
        inline
        label="Cat"
        name="pet"
        register={register}
        value="cat"
      />

      <Checkbox
        {...args}
        errors={formState.errors}
        inline
        label="Dog"
        name="pet"
        register={register}
        value="dog"
      />
    </>
  )
}
