/**
 * Select
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
import FormLabel from '../../label/label'
import SelectField from '../../select/select'
import SelectCountryField from '../../select/country'
import Text from '../../../atoms/text/text'
import Readme from '../README.md'
import { COLOURS, EXPENSES } from '../__mocks__/select'

export default {
  title: 'Form/Select',
  component: SelectField,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

const BaseComponent = (props = {}) => {
  const schema = object().shape({
    select: string().required()
  })

  const { errors, getValues, handleSubmit, register } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {}

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
      <FormLabel label="Select">
        {!props.country && <SelectField {...defaultProps} />}
        {props.country && <SelectCountryField {...defaultProps} />}
      </FormLabel>

      <Button content="Submit" type="submit" />

      {getValues() && <Text>{getValues().select}</Text>}
    </Form>
  )
}

export const main = () => <BaseComponent options={COLOURS} />
export const optionGroups = () => <BaseComponent options={EXPENSES} />
export const country = () => <BaseComponent country />
export const range = () => <BaseComponent range={[20, 0]} />
