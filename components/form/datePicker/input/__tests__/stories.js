/**
 * Form - Date Picker - Input
 */

// React
import React from 'react'

// Storybook
import { boolean, withKnobs } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// Yup
import { object, string } from 'yup'

// UI
import { Button, DatePickerInput, Divider, Form, Text, useForm, yupResolver } from 'components'
import Readme from '../README.md'

export default {
  title: 'Form/Date Picker/Input',
  component: DatePickerInput,
  decorators: [withKnobs, Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const schema = object().shape({
    dayPicker: string().required(),
    monthPicker: string().required(),
    yearPicker: string().required()
  })

  const { errors, getValues, handleSubmit, register } = useForm({
    defaultValues: { dayPicker: 10 },
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {}

  const defaultProps = {
    data: {},
    errors: errors,
    index: 1,
    label: 'Date Picker',
    name: 'Picker',
    register: register,
    showDay: boolean('Day', props.showDay || true),
    showMonth: boolean('Month', props.showMonth || true),
    showYear: boolean('Year', props.showYear || true),
    yearEnd: 2020,
    yearStart: 1919,
    ...props
  }

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <DatePickerInput {...defaultProps} />

      <Divider size='sm' />

      <Button content='Submit' type='submit' />

      <Text>
        {getValues() && getValues().yearPicker}
        {'-'}
        {getValues() && getValues().monthPicker}
        {'-'}
        {getValues() && getValues().dayPicker}
      </Text>

      {errors.dayPicker && errors.dayPicker.message}
      <br />
      {errors.monthPicker && errors.monthPicker.message}
      <br />
      {errors.yearPicker && errors.yearPicker.message}
    </Form>
  )
}

export const main = () => <BaseComponent />
export const selective = () => <BaseComponent showDay={false} />
