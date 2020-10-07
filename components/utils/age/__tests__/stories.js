/**
 * Age
 */

// Storybook
import { Wrapper } from 'decorators'

// Date FNS
import enGB from 'date-fns/locale/en-GB'

// UI
import {
  age,
  Button,
  ControlTypes,
  DatePickerCalendar,
  Divider,
  Form,
  Text,
  useForm
} from 'components'

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
  decorators: [Wrapper],
  title: 'Utils/Age',
  parameters: {
    readme: {
      sidebar: Readme
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
