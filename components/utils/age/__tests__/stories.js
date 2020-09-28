/**
 * Age
 */

// Date FNS
import enGB from 'date-fns/locale/en-GB'

// UI
import { age, Button, DatePickerCalendar, Divider, Form, Text, useForm } from 'components'
import Readme from '../README.md'

export default {
  title: 'Utils/Age',
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => {
  const { control, errors, getValues, handleSubmit } = useForm({
    defaultValues: {
      birthDate: new Date('2001-09-20')
    }
  })

  const defaultProps = {
    control: control,
    errors: errors,
    minDate: null,
    name: 'birthDate',
    locale: enGB
  }

  const onSubmit = data => {}

  const birthDate = getValues()?.birthDate

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <Text>Age: {age(birthDate)}</Text>

      <DatePickerCalendar {...defaultProps} />

      <Divider size='sm' />

      <Button content='Submit' type='submit' />
    </Form>
  )
}
