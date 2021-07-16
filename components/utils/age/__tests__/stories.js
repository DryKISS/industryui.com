/**
 * Components - Utils - Age
 */

// React
import React from 'react'

// Storybook
import { ControlTypes } from '../../../../.storybook/decorators/controlTypes'

// React Hook Form
import { useForm } from 'react-hook-form'

// Date FNS
import enGB from 'date-fns/locale/en-GB'

// UI
import age from '../age'
import Button from '../../../atoms/button/button/button'
import DatePickerCalendar from '../../../form/datePicker/calendar/calendar'
import Divider from '../../../atoms/divider/divider'
import Form from '../../../form/form/form'
import Text from '../../../atoms/text/text'
import Readme from '../README.md'

export default {
  args: {
    birthDate: new Date('2001-09-20')
  },
  argTypes: {
    birthDate: {
      name: 'Birth Date',
      control: { type: ControlTypes.Date }
    }
  },
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Utils/Age'
}

export const Main = (args) => {
  const { control, errors, handleSubmit } = useForm()

  const defaultProps = {
    control: control,
    errors: errors,
    locale: enGB,
    minDate: null,
    name: 'birthDate'
  }

  const onSubmit = (data) => {}

  const birthDate = args.birthDate

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <Text>Age: {age(birthDate)}</Text>

      <DatePickerCalendar {...defaultProps} />

      <Divider size="sm" />

      <Button content="Submit" type="submit" />
    </Form>
  )
}
