/**
 * Age
 */

// Storybook
import { ControlTypes } from '../../../../.storybook/decorators'

// React Hook Form
import { useForm } from 'react-hook-form'

// Date FNS
import enGB from 'date-fns/locale/en-GB'

// UI
import { age, Button, DatePickerCalendar, Divider, Form, Text } from '../../../'
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
  title: 'Utils/Age',
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const main = args => {
  const { control, errors, handleSubmit } = useForm()

  const defaultProps = {
    control: control,
    errors: errors,
    locale: enGB,
    minDate: null,
    name: 'birthDate'
  }

  const onSubmit = data => {}

  const birthDate = args.birthDate

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <Text>Age: {age(birthDate)}</Text>

      <DatePickerCalendar {...defaultProps} />

      <Divider size='sm' />

      <Button content='Submit' type='submit' />
    </Form>
  )
}
