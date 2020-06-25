/**
 * Select
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import {
  Button,
  Form,
  FormLabel,
  SelectField,
  SelectCountryField,
  useForm,
  yup,
  yupResolver
} from 'components'
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

  const { errors, getValues, handleSubmit, register } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = data => {}

  const defaultProps = {
    data: { name: 'fred' },
    defaultValue: '',
    disabled: false,
    errors: errors,
    name: 'select',
    placeholder: 'Range',
    range: [],
    register: register,
    showError: true,
    ...props
  }

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <FormLabel label='Select'>
        {!props.country && <SelectField {...defaultProps} />}
        {props.country && <SelectCountryField {...defaultProps} />}
      </FormLabel>

      <Button content='Submit' type='submit' />

      {getValues() && <p>{getValues().select}</p>}
      {errors.select && errors.select.message}
    </Form>
  )
}

export const main = () => <BaseComponent options={COLOURS} />
export const optionGroups = () => <BaseComponent options={EXPENSES} />
export const country = () => <BaseComponent country />
export const range = () => <BaseComponent range={[20, 0]} />
