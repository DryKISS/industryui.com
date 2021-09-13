/**
 * Form - Currency
 */

// React
import React from 'react'

// Storybook
import FormWrapper from '../../../../.storybook/decorators/wrapper/form'

// Yup
import { object, string } from 'yup'

// UI
import Button from '../../../atoms/button/button/button'
import CurrencyInput from '../../currency/currencyInput'
import InputGroupAddon from '../../inputGroup/addon'
import Readme from '../README.md'

const schema = object().shape({
  expense: string().required()
})

export default {
  args: {
    label: 'Currency input',
    name: 'expense',
    vat: 'Incl VAT'
  },
  component: CurrencyInput,
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
  <>
    <CurrencyInput {...args} errors={formState.errors} register={register} />

    <CurrencyInput {...args} errors={formState.errors} register={register}>
      <InputGroupAddon addonType="append">
        <Button content="Submit" type="submit" size="sm" />
      </InputGroupAddon>
    </CurrencyInput>
  </>
)
