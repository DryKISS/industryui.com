/**
 * Compnents - Form - Currency
 */

// React
import React from 'react'

// Storybook
import FormWrapper from '../../../../.storybook/decorators/wrapper/form'

// Yup
import { object, string } from 'yup'

// UI
import Button from '../../../atoms/button/button/button'
import Currency from '../../currency/currency'
import InputGroupAddon from '../../inputGroup/addon'
import Label from '../../label/label'
import Readme from '../README.md'

const schema = object().shape({
  expense: string().required()
})

export default {
  args: {
    label: 'Currency',
    name: 'expense'
  },
  component: Currency,
  decorators: [FormWrapper],
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    },
    schema: schema
  },
  title: 'Form/Currency'
}

export const Main = (args, { params: { formState, register } }) => (
  <Label label="Currency">
    <Currency {...args} errors={formState.errors} register={register} />
  </Label>
)

export const WithButton = (args, { params: { formState, register } }) => (
  <Label label="Currency">
    <Currency {...args} errors={formState.errors} register={register} size="lg">
      <InputGroupAddon addonType="append">
        <Button content="Submit" type="submit" size="sm" />
      </InputGroupAddon>
    </Currency>
  </Label>
)
