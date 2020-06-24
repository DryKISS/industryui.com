/**
 * Form - Form
 */

// React
import React from 'react'

// Storybook
import { text, withKnobs } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// React Hook Form
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers'

// UI
import {
  Button,
  CheckboxField,
  Column,
  CurrencyInput,
  DatePickerCalendar,
  Divider,
  Dropzone,
  FormError,
  FormField,
  Form,
  FormLabel,
  Heading,
  RadioField,
  ReactSelectField,
  Row,
  SelectField,
  Space,
  Text,
  TextareaField
} from 'components'

import Readme from '../README.md'

// Data
import enGB from 'date-fns/locale/en-GB'
import { RADIO_GENDER } from '../../radio/__mocks__/radio'
import { Options } from '../../reactSelect/__mocks__/options'
import { COLOURS } from '../../select/__mocks__/colours'

export default {
  title: 'Form',
  component: Form,
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
  const { control, errors, handleSubmit, register } = useForm({ resolver: yupResolver(schema) })
  const onSubmit = data => {}

  console.log(errors)

  const defaultProps = {
    errors: errors,
    register: register
  }

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
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
          <FormLabel label='Email'>
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

        <Column md={6}>
          <FormLabel label='Datepicker'>
            <DatePickerCalendar
              {...defaultProps}
              control={control}
              locale={enGB}
              name='datePicker'
            />
          </FormLabel>
        </Column>

        <Column md={6}>
          <FormLabel label='React Select'>
            <ReactSelectField
              {...defaultProps}
              control={control}
              name='reactSelecgt'
              options={Options}
            />
          </FormLabel>
        </Column>

        <Column md={12}>
          <FormLabel children='' label='Dropzone' />
          <Controller
            {...defaultProps}
            render={() => <Dropzone multiple={false} />}
            control={control}
            name='dropzone'
          />
        </Column>
      </Row>

      <Divider size='md' />

      <CurrencyInput {...defaultProps} name='amount' label='Total amount' />

      <FormLabel label='Input'>
        <FormField {...defaultProps} name='input' />
      </FormLabel>

      <FormLabel label='Textarea'>
        <TextareaField {...defaultProps} rows={2} name='textArea' />
      </FormLabel>

      <FormLabel label='Select'>
        <SelectField {...defaultProps} options={COLOURS} name='select' />
      </FormLabel>

      <CheckboxField
        {...defaultProps}
        data={checkbox}
        legend={text('Legend', 'Checkbox Legend')}
        name='checkbox'
      />

      <RadioField {...defaultProps} data={RADIO_GENDER()} legend='Gender?' name='radio' />

      <Button content='Submit' type='submit' />
    </Form>
  )
}
