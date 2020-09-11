/**
 * Form - Form
 */

// React
import React from 'react'

// Storybook
import { text } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// UI
import {
  Button,
  CheckboxField,
  Column,
  Controller,
  ControlTypes,
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
  sizeArray,
  Space,
  Text,
  TextareaField,
  useForm,
  yup,
  yupResolver
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
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const schema = yup.object().shape({
  amount: yup.number().required(),
  checkbox: yup.string().required(),
  radio: yup.string().required(),
  disabled: yup.string(),
  email: yup.string().required(),
  input: yup.string().required(),
  name: yup.string().required(),
  reactSelect: yup.string().required(),
  datepicker: yup.string().required(),
  textarea: yup.string().required(),
  select: yup.string().required(),
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

const all = ({ ...args }) => {
  const { control, errors, handleSubmit, register } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = data => {
    console.log(data)
  }

  console.log(errors)

  const colMd = args.ColumnWidth

  const rowBackground = args.backgroundColour

  const defaultProps = {
    errors: errors,
    register: register,
    size: args.size
  }

  const ErrMessage = message => <FormError message={message} />

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <Heading content='Inputs' tag='h1' />

      <Space />

      <Text>{args.formTitle}</Text>

      <Space />

      <Row style={{ background: rowBackground }}>
        <Column md={colMd}>
          <FormLabel size='md' label='Name'>
            <FormField {...defaultProps} name='name' />
            {errors.name && ErrMessage(errors.name.message)}
          </FormLabel>
        </Column>

        <Column md={colMd}>
          <FormLabel size='md' label='Email'>
            <FormField {...defaultProps} name='email' placeholder='Enter Email' />
            <Text>We'll never share your email with anyone else.</Text>
            {errors.email && ErrMessage(errors.email.message)}
          </FormLabel>
        </Column>

        <Column md={colMd}>
          <FormLabel label='Disabled'>
            <FormField {...defaultProps} disabled name='disabled' />
            {errors.disabled && ErrMessage(errors.disabled.message)}
          </FormLabel>
        </Column>

        <Column md={colMd}>
          <FormLabel label='Readonly'>
            <FormField
              {...defaultProps}
              defaultValue='Readonly with defaultValue'
              name='readonly'
              readOnly
            />
            {errors.readonly && ErrMessage(errors.readonly.message)}
          </FormLabel>
        </Column>

        <Column md={colMd}>
          <FormLabel label='Datepicker'>
            <DatePickerCalendar
              {...defaultProps}
              control={control}
              locale={enGB}
              name='datepicker'
            />
          </FormLabel>
        </Column>

        <Column md={colMd}>
          <FormLabel label='React Select'>
            <ReactSelectField
              {...defaultProps}
              control={control}
              name='reactSelect'
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
        <TextareaField {...defaultProps} rows={2} name='textarea' />
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

export const AllInputsTemplate = all.bind({})

AllInputsTemplate.args = {
  formTitle:
    'Grid elements can be used to layout a form, we do not need to repeat rows as the columns will wrap.',
  backgroundColour: '#F5F5F7',
  ColumnWidth: 6,
  size: 'md',
  datePickerValue: ''
}
AllInputsTemplate.argTypes = {
  children: {
    control: {
      type: null
    }
  },
  datePickerValue: {
    name: 'Date Picker Value',
    control: { type: ControlTypes.Date }
  },
  backgroundColour: { name: 'Background Colour', control: ControlTypes.Color },
  formTitle: {
    name: 'Form Tilte'
  },
  ColumnWidth: {
    name: 'col md',
    control: { type: ControlTypes.Range, min: 2, max: 12 }
  },

  size: { name: 'Input Size', control: { type: ControlTypes.Select, options: sizeArray } }
}
