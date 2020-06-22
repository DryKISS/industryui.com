/**
 * Form - Form
 */

// React
import React from 'react'

// Storybook
import { text, withKnobs } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// React Hook Form
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers'

// UI
import {
  Button,
  CheckboxField,
  Column,
  CurrencyInput,
  Divider,
  FormError,
  FormField,
  FormForm,
  FormLabel,
  Heading,
  Row,
  Space,
  Text
} from 'components'

import Readme from '../README.md'

export default {
  title: 'Form',
  component: FormForm,
  decorators: [withKnobs, Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const schema = yup.object().shape({
  amount: yup.number().required(),
  checkbox: yup.string().required(),
  disabled: yup.string(),
  email: yup.string().required(),
  input: yup.string().required(),
  name: yup.string().required(),
  readonly: yup.string()
})

const checkbox = [
  {
    id: 'check',
    label: 'Yes',
    value: 'check'
  },
  {
    id: 'checked',
    label: 'No',
    value: 'checked'
  }
]

export const all = () => {
  const { errors, handleSubmit, register } = useForm({ resolver: yupResolver(schema) })
  const onSubmit = data => {}

  console.log(errors)

  const defaultProps = {
    errors: errors,
    register: register
  }

  return (
    <FormForm handleSubmit={handleSubmit(onSubmit)}>
      <Heading content='Inputs' tag='h1' />

      <Space />

      <Text>
        Grid elements can be used to layout a form, we do not need to repeat rows as the columns
        will wrap.
      </Text>

      <Space />

      <Row>
        <Column md={6}>
          <FormLabel label='Name'>
            <FormField {...defaultProps} name='name' />
            {errors.name && <FormError message={errors.name.message} />}
          </FormLabel>
        </Column>

        <Column md={6}>
          <FormLabel label='Email;'>
            <FormField {...defaultProps} name='email' placeholder='Enter Email' />
            <Text size='sm'>We'll never share your email with anyone else.</Text>
            {errors.email && <FormError message={errors.email.message} />}
          </FormLabel>
        </Column>

        <Column md={6}>
          <FormLabel label='Disabled'>
            <FormField {...defaultProps} disabled name='disabled' />
            {errors.disabled && <FormError message={errors.disabled.message} />}
          </FormLabel>
        </Column>

        <Column md={6}>
          <FormLabel label='Readonly'>
            <FormField
              {...defaultProps}
              defaultValue='Readonly with defaultValue'
              name='readonly'
              readOnly
            />
            {errors.readonly && <FormError message={errors.readonly.message} />}
          </FormLabel>
        </Column>
      </Row>

      <Divider size='md' />

      <CurrencyInput {...defaultProps} name='amount' label='Total amount' />

      <FormLabel label='Input'>
        <FormField {...defaultProps} name='input' />
      </FormLabel>

      <CheckboxField
        {...defaultProps}
        data={checkbox}
        legend={text('Legend', 'Checkbox Legend')}
        name='checkbox'
      />

      <Button content='Submit' type='submit' />
    </FormForm>
  )
}
