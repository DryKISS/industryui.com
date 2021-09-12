/**
 * Form - Field - Currency
 */

// React
import React from 'react'

// React Hook Form
import { useForm } from 'react-hook-form'

// Yup
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// UI
import Button from '../../../atoms/button/button/button'
import Form from '../../form/form'
import CurrencyInput from '../../field/currencyInput'
import InputGroupAddon from '../../inputGroup/addon'
import Readme from '../README.md'

export default {
  args: {
    label: 'Currency input',
    name: 'expense',
    vat: 'Incl VAT'
  },
  component: CurrencyInput,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Form/Field/Currency'
}

const schema = object().shape({
  expense: string().required()
})

const BaseComponent = (args) => {
  const { errors, handleSubmit, register } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {}

  const defaultProps = {
    errors: errors,
    register: register,
    ...args
  }

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <CurrencyInput {...defaultProps} />

      <CurrencyInput {...defaultProps}>
        <InputGroupAddon addonType="append">
          <Button content="Submit" type="submit" size="sm" />
        </InputGroupAddon>
      </CurrencyInput>
    </Form>
  )
}

export const currency = (args) => <BaseComponent {...args} />
