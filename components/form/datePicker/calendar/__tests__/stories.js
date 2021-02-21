/**
 * Form - DatePicker - Calendar - Stories
 */

// React
import React from 'react'

// React Hook Form
import { useForm } from 'react-hook-form'

// Yup
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// Date utility
import addDays from 'date-fns/addDays'
import enGB from 'date-fns/locale/en-GB'
import getDay from 'date-fns/getDay'
import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes'

// UI
import {
  Button,
  DatePickerCalendar,
  Divider,
  Form,
  FormError,
  Text
} from '../../../../'

import Readme from '../README.md'
import { args, argTypes } from './controls'

export default {
  args,
  argTypes,
  component: DatePickerCalendar,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Form/Date Picker/Calendar'
}

const schema = object().shape({
  expiryAt: string().required()
})

const BaseComponent = (props = {}) => {
  const { control, errors, getValues, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {}

  const defaultProps = {
    control: control,
    errors: errors,
    locale: enGB,
    name: 'expiryAt',
    ...props
  }

  const value = getValues()?.expiryAt?.toString()

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <DatePickerCalendar {...defaultProps} />

      <Divider size="sm" />

      <Button content="Submit" size="sm" type="submit" />

      <Text>{value}</Text>

      <FormError message={errors?.expiryAt?.message || ''} />
    </Form>
  )
}

export const main = (args) => <BaseComponent {...args} />

export const defaultValue = (args) => (
  <BaseComponent {...args} defaultValue={addDays(new Date(), 5)} />
)

export const time = (args) => (
  <BaseComponent {...args} dateFormat="MMMM d, yyyy h:mm aa" showTimeSelect />
)

const filterPassedTime = (time) => {
  const currentDate = new Date()
  const selectedDate = new Date(time)
  return currentDate.getTime() < selectedDate.getTime()
}

export const minTime = (args) => (
  <BaseComponent
    {...args}
    dateFormat="MMMM d, yyyy h:mm aa"
    minDate={new Date()}
    filterTime={filterPassedTime}
    showTimeSelect
  />
)

export const workingHours = (args) => {
  const isWeekday = (date) => {
    const day = getDay(date)
    return day !== 0 && day !== 6
  }

  const holidays = [new Date(2020, 11, 25), addDays(new Date(2020, 11, 25), 1)]

  const freeDays = [
    new Date(2020, 10, 27),
    new Date(2020, 11, 24),
    new Date(2020, 11, 17),
    new Date(2020, 11, 10)
  ]

  const stringifyArray = (arr) => arr.map((item) => item.toString())

  const renderDayContents = (day, date) => {
    const tooltipText = 'No need to pay'
    const isFree = stringifyArray(freeDays).includes(date.toString())
    return isFree ? <span title={tooltipText}>{day}</span> : day
  }

  return (
    <>
      <Text>Our Schedule: 9:30AM - 6:30PM, Monday - Friday</Text>

      <BaseComponent
        {...args}
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
        placeholderText="Select your appointment"
        renderDayContents={renderDayContents}
        showTimeSelect>
        <Text>*50% Discount</Text>
      </BaseComponent>
    </>
  )
}
