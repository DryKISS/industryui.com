/**
 * Components - Form - DatePicker - Stories
 */

// React
import React from 'react'

// Storybook
import FormWrapperControl from '../../../../.storybook/decorators/wrapper/formControl'

// Yup
import { date, object } from 'yup'

// Date utility
import addDays from 'date-fns/addDays'
import enGB from 'date-fns/locale/en-GB'
import getDay from 'date-fns/getDay'
import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes'

// UI
import DatePicker from '../datePicker'
import Error from '../../error/error'
import Space from '../../../atoms/space/space'
import Text from '../../../atoms/text/text'
import Readme from '../README.md'
import { args, argTypes } from './controls'

const schema = object().shape({
  expiryAt: date().required()
})

export default {
  args,
  argTypes,
  component: DatePicker,
  decorators: [FormWrapperControl],
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    },
    schema: schema
  },
  title: 'Form/Date Picker'
}

export const Main = (args, { params: { control, formState, getValues } }) => {
  const value = getValues()?.expiryAt?.toString()

  return (
    <>
      <DatePicker {...args} control={control} errors={formState.errors} locale={enGB} />
      <Error message={formState.errors?.expiryAt?.message || ''} />

      <Space />
      <Text>
        If a watch is added getValues will also return based on the re-render from the Watch. Using
        a different mode can also return validation quicker and getValues without a watch. onTouched
        is a good one for this.
      </Text>

      <Text>GetValue: {value}</Text>
    </>
  )
}

export const DefaultWithTime = (args, { params: { control, formState, getValues } }) => {
  const filterPassedTime = (time) => {
    const currentDate = new Date()
    const selectedDate = new Date(time)
    return currentDate.getTime() < selectedDate.getTime()
  }

  return (
    <DatePicker
      {...args}
      control={control}
      errors={formState.errors}
      filterTime={filterPassedTime}
      dateFormat="MMMM d, yyyy h:mm aa"
      defaultValue={addDays(new Date(), 5)}
      locale={enGB}
      minDate={new Date()}
      showTimeSelect
    />
  )
}

export const AdvnacedFiltering = (args, { params: { control, formState, getValues } }) => {
  const isWeekday = (date) => {
    const day = getDay(date)
    return day !== 0 && day !== 6
  }

  const holidays = [new Date(2020, 11, 25), addDays(new Date(2020, 11, 25), 1)]

  const freeDays = [
    new Date(2021, 9, 30),
    new Date(2021, 11, 24),
    new Date(2021, 11, 17),
    new Date(2021, 11, 10)
  ]

  const stringifyArray = (arr) => arr.map((item) => item.toString())

  const renderDayContents = (day, date) => {
    const tooltipText = 'No need to pay'
    const isFree = stringifyArray(freeDays).includes(date.toString())
    return isFree ? <span title={tooltipText}>{day}</span> : day
  }

  return (
    <>
      <Text>Our Schedule: 9:30AM - 6:30PM (excluding 5-6pm), Monday - Friday</Text>
      <Space />

      <DatePicker
        {...args}
        control={control}
        errors={formState.errors}
        excludeDates={holidays}
        excludeTimes={[
          setHours(setMinutes(new Date(), 0), 17),
          setHours(setMinutes(new Date(), 30), 18),
          setHours(setMinutes(new Date(), 30), 19),
          setHours(setMinutes(new Date(), 30), 17)
        ]}
        dateFormat="MMMM d, yyyy h:mm aa"
        filterDate={isWeekday}
        highlightDates={freeDays}
        maxTime={setHours(setMinutes(new Date(), 30), 18)}
        minTime={setHours(setMinutes(new Date(), 30), 9)}
        locale={enGB}
        minDate={new Date()}
        renderDayContents={renderDayContents}
        showTimeSelect
      />
    </>
  )
}
