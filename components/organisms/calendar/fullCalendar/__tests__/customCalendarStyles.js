/**
 * Full Calendar - Custom Calendar styles
 */

// React
import { useState } from 'react'

// Moment
import moment from 'moment'

// UI
import { OffCanvas, Button, Form, FormLabel, FormField, SelectField, useForm } from '../../../../'
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
    showError: true
  }

  const onSubmit = data => {
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
      <Form handleSubmit={handleSubmit(onSubmit)}>
        <FormLabel label='Height'>
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
      </Form>
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
