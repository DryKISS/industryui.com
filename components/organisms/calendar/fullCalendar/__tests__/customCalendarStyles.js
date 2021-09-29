/**
 * Components - Organisms - Full Calendar - Custom Calendar styles
 */

// React
import React, { useState } from 'react'

// Moment
import moment from 'moment'

// React Hook Form
import { useForm } from 'react-hook-form'

// UI
import OffCanvas from '../../../../molecules/offCanvas/offCanvas'
import Button from '../../../../atoms/button/button/button'
import Form from '../../../../form/form/form'
import Label from '../../../../form/label/label'
import Input from '../../../../form/input/input'
import Select from '../../../../form/select/select'
import { BaseComponent } from './stories'
import { colorEvent } from '../__mocks__/events'

const CustomCalendarStyles = () => {
  const [showOffCanvas, setShowOffCanvas] = useState(false)
  const { errors, handleSubmit, register } = useForm()
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
    date: moment().date(2).format('YYYY-MM-DD'),
    description: 'All day event',
    title: 'Event 1',
    tooltip: 'All day event tooltip'
  },
  {
    description: 'Event starting at a specific time',
    date: moment().date(7).hour(14).minute(30).format(),
    title: 'Event 2'
  },
  {
    daysOfWeek: [2],
    description: 'Recurring event, once per week, all day',
    endRecur: moment().date(30).format('YYYY-MM-DD'),
    startRecur: moment().date(5).format('YYYY-MM-DD'),
    title: 'PPM: Boiler Check'
  }
]
export default CustomCalendarStyles
