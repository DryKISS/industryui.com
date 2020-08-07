/**
 * Full Calendar - Custom Calendar styles
 */

// React
import { useState } from 'react'
import moment from 'moment'

import { useForm } from 'react-hook-form'
import { OffCanvas, Button, FormLabel, FormField, SelectField } from 'components'

import { FormForm } from 'index'
import { BaseComponent } from './stories'

import { colorEvent } from '../__mocks__/events'

export const CustomCalendarStyles = () => {
  const [showOffCanvas, setShowOffCanvas] = useState(false)
  const { errors, handleSubmit, register } = useForm()
  const [calendarStyles, setCalendarStyles] = useState({})

  const defaultProps = {
    disabled: false,
    errors: errors,
    register: register,
    showError: true,
    required: false
  }

  const onSubmit = data => {
    console.log('data submitted ', data)
    const newCalendarStyles = {
      height: Number(data.height),
      eventColor: data.eventColor,
      weekends: data.weekends
    }
    setCalendarStyles(newCalendarStyles)
    setShowOffCanvas(false)
  }

  const CalendarStyleForm = () => {
    return (
      <FormForm handleSubmit={handleSubmit(onSubmit)}>
        <FormLabel label='Title'>
          <FormField
            type='number'
            name='height'
            errors={errors}
            placeholder='Introduce the calendar height'
            register={register}
          />
        </FormLabel>
        <FormLabel label='Default event color'>
          <SelectField name='eventColor' options={colorEvent} {...defaultProps} />
        </FormLabel>
        <Button content='Submit' type='submit' />
      </FormForm>
    )
  }

  return (
    <>
      <button onClick={() => setShowOffCanvas(true)}>Open canvas</button>
      {showOffCanvas && (
        <OffCanvas headerText='Add custom event' show={showOffCanvas}>
          {CalendarStyleForm()}
        </OffCanvas>
      )}
      <BaseComponent {...calendarStyles} events={Events} />
    </>
  )
}

export const Events = [
  {
    date: moment()
      .date(2)
      .format('YYYY-MM-DD'),
    description: 'All day event',
    title: 'Event 1',
    tooltip: 'All day event tooltip'
  },

  {
    description: 'Event starting at a specific time',
    date: moment()
      .date(7)
      .hour(14)
      .minute(30)
      .format(),
    title: 'Event 2'
  },
  {
    daysOfWeek: [2],
    description: 'Recurring event, once per week, all day',
    endRecur: moment()
      .date(30)
      .format('YYYY-MM-DD'),
    startRecur: moment()
      .date(5)
      .format('YYYY-MM-DD'),
    title: 'PPM: Boiler Check'
  }
]
