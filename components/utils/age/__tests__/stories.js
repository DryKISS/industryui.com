/**
 * Age
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// useForm
import { useForm } from 'react-hook-form'

// Date FNS
import enGB from 'date-fns/locale/en-GB'

// UI
import { age, Button, DatePickerCalendar, Divider, FormForm } from 'components'
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

  const birthDate = getValues()?.birthDate?.toString()

  return (
    <FormForm handleSubmit={handleSubmit(onSubmit)}>
      <p>Age: {age(birthDate)}</p>

      <DatePickerCalendar {...defaultProps} />

      <Divider />

      <Button content='Submit' type='submit' />
    </FormForm>
  )
}
