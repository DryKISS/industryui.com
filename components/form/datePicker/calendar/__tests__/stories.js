/**
 * Form - DatePicker - Calendar - Stories
 */

// React
import React from 'react'

// Storybook
import { withKnobs } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// React Hook Form
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers'

// Date utility
import addDays from 'date-fns/addDays'
import getDay from 'date-fns/getDay'
import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes'
import enGB from 'date-fns/locale/en-GB'

// UI
import { Button, DatePickerCalendar, Divider, Form, FormError } from 'components'
import Readme from '../README.md'
import { KNOBS } from './knobs'

export default {
  title: 'Form/Date Picker/Calendar',
  component: DatePickerCalendar,
  decorators: [withKnobs, Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const schema = yup.object().shape({
    expiryAt: yup.string().required()
  })

  const { control, errors, getValues, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {}

  const knobs = KNOBS()

  const defaultProps = {
    control: control,
    errors: errors,
    name: 'expiryAt',
    locale: enGB,
    ...knobs,
    ...props
  }

  const value = getValues()?.expiryAt?.toString()

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <DatePickerCalendar {...defaultProps} />

      <Divider />

      <Button content='Submit' type='submit' />

      <p>{value}</p>

      <FormError message={errors?.expiryAt?.message || ''} />
    </Form>
  )
}

export const main = () => <BaseComponent />
export const defaultValue = () => <BaseComponent defaultValue={addDays(new Date(), 5)} />
export const time = () => <BaseComponent dateFormat='MMMM d, yyyy h:mm aa' showTimeSelect />

export const workingHours = () => {
  const isWeekday = date => {
    const day = getDay(date)
    return day !== 0 && day !== 6
  }

  const holidays = [
    new Date(2020, 11, 25), // Christmas
    addDays(new Date(2020, 11, 25), 1) // Boxing Day
  ]

  const freeDays = [
    new Date(2020, 10, 27),
    new Date(2020, 11, 24),
    new Date(2020, 11, 17),
    new Date(2020, 11, 10)
  ]

  const stringifyArray = arr => arr.map(item => item.toString())

  const renderDayContents = (day, date) => {
    const tooltipText = 'No need to pay'
    const isFree = stringifyArray(freeDays).includes(date.toString())
    return isFree ? <span title={tooltipText}>{day}</span> : day
  }

  return (
    <>
      <p>Our Schedule: 9:30AM - 6:30PM, Monday - Friday</p>

      <BaseComponent
        excludeDates={holidays}
        excludeTimes={[
          setHours(setMinutes(new Date(), 0), 17),
          setHours(setMinutes(new Date(), 30), 18),
          setHours(setMinutes(new Date(), 30), 19),
          setHours(setMinutes(new Date(), 30), 17)
        ]}
        filterDate={isWeekday}
        highlightDates={freeDays}
        maxTime={setHours(setMinutes(new Date(), 30), 18)}
        minTime={setHours(setMinutes(new Date(), 30), 9)}
        placeholderText='Select your appointment'
        renderDayContents={renderDayContents}
        showTimeSelect
      >
        <p style={{ color: '#3dcc4a' }}>*50% Discount</p>
      </BaseComponent>
    </>
  )
}
