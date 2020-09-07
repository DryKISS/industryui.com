/**
 * Age
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// Date FNS
import enGB from 'date-fns/locale/en-GB'

// UI
import { age, Button, DatePickerCalendar, Divider, FormForm, Text, useForm } from 'components'
import Readme from '../README.md'

export default {
  title: 'Utils/Age',
  decorators: [Wrapper],
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
    <FormForm handleSubmit={handleSubmit(onSubmit)}>
      <Text>Age: {age(birthDate)}</Text>

      <DatePickerCalendar {...defaultProps} />

      <Divider size='sm' />

      <Button content='Submit' type='submit' />
    </FormForm>
  )
}
