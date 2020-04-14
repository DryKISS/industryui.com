/**
 * Select
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// Reach Hook Form
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

// UI
import { Button, FormForm, FormLabel, SelectField, SelectCountryField } from 'components'
import Readme from '../README.md'
import { COLOURS, EXPENSES } from '../__mocks__'

export default {
  title: 'Form/Select',
  component: SelectField,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const schema = yup.object().shape({
    select: yup.string().required()
  })

  const { errors, getValues, handleSubmit, register } = useForm({ validationSchema: schema })

  const onSubmit = data => {}

  const defaultProps = {
    data: { name: 'fred' },
    defaultValue: '',
    disabled: false,
    errors: errors,
    name: 'select',
    placeholder: 'Range',
    range: [],
    required: true,
    register: register,
    showError: true,
    ...props
  }

  return (
    <FormForm handleSubmit={handleSubmit(onSubmit)}>
      <FormLabel label='Select'>
        {!props.country && <SelectField {...defaultProps} />}
        {props.country && <SelectCountryField {...defaultProps} />}
      </FormLabel>

      <Button content='Submit' type='submit' />

      {getValues() && <p>{getValues().select}</p>}
      {errors.select && errors.select.message}
    </FormForm>
  )
}

export const main = () => <BaseComponent options={COLOURS} />
export const optionGroups = () => <BaseComponent options={EXPENSES} />
export const country = () => <BaseComponent country />
export const range = () => <BaseComponent range={[20, 0]} />
