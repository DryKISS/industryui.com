/**
 * Components - Organisms - Full Calendar - Custom Calendar styles
 */

// React
import React, { useState } from 'react'
import { format, set, setDate } from 'date-fns'

// React Hook Form
import { useForm } from 'react-hook-form'

// UI
import Button from '../../../atoms/button/button/button'
import { BaseComponent } from './stories'
import { colorEvent } from '../__mocks__/events'
import Form from '../../../form/form/form'
import Input from '../../../form/input/input'
import Label from '../../../form/label/label'
import OffCanvas from '../../../molecules/offCanvas/offCanvas'
import Select from '../../../form/select/select'

const CustomCalendarStyles = () => {
  const [showOffCanvas, setShowOffCanvas] = useState(false)
  const {
    formState: { errors = {} },
    handleSubmit,
    register
  } = useForm()
  const [calendarStyles, setCalendarStyles] = useState({})

  const defaultProps = {
    disabled: false,
    errors: errors,
    register: register,
    showError: true
  }

  const onSubmit = (data) => {
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
        <Label label="Height">
          <Input
            type="number"
            name="height"
            errors={errors}
            placeholder="Introduce the calendar height"
            register={register}
          />
        </Label>

        <Label label="Default event color">
          <Select name="eventColor" options={colorEvent} {...defaultProps} />
        </Label>

        <Button content="Submit" type="submit" />
      </Form>
    )
  }

  return (
    <>
      <button onClick={() => setShowOffCanvas(true)}>Open canvas</button>

      {showOffCanvas && (
        <OffCanvas headerText="Add custom event" show={showOffCanvas}>
          {CalendarStyleForm()}
        </OffCanvas>
      )}

      <BaseComponent {...calendarStyles} events={Events} />
    </>
  )
}

export const Events = [
  {
    date: format(setDate(new Date(), 2), 'yyyy-MM-dd'),
    description: 'All day event',
    title: 'Event 1',
    tooltip: 'All day event tooltip'
  },
  {
    description: 'Event starting at a specific time',
    date: set(new Date(), { date: 7, hours: 14, minutes: 30 }).toISOString(),
    title: 'Event 2'
  },
  {
    daysOfWeek: [2],
    description: 'Recurring event, once per week, all day',
    endRecur: format(setDate(new Date(), 30), 'yyyy-MM-dd'),
    startRecur: format(setDate(new Date(), 5), 'yyyy-MM-dd'),
    title: 'PPM: Boiler Check'
  }
]
export default CustomCalendarStyles
