/**
 * Form - Date Picker - Input
 */

// React Hook Form
import { useForm } from 'react-hook-form'

// Yup
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// UI
import { Button, DatePickerInput, Divider, Form, Text } from '../../../../'
import Readme from '../README.md'

export default {
  args: { showDay: true, showMonth: true, showYear: true },
  title: 'Form/Date Picker/Input',
  component: DatePickerInput,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

const schema = object().shape({
  dayPicker: string().required(),
  monthPicker: string().required(),
  yearPicker: string().required()
})

const BaseComponent = (props = {}) => {
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

export const main = args => <BaseComponent {...args} />
