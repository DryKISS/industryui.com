/**
 * Full Calendar - Custom Calendar styles
 */

// React
import { useState } from 'react'

import { useForm } from 'react-hook-form'
import { OffCanvas, Button, FormLabel, FormField } from 'components'

import { FormForm } from 'index'
import { BaseComponent } from './stories'
export const CustomCalendarStyles = () => {
  const [showOffCanvas, setShowOffCanvas] = useState(false)
  const { errors, handleSubmit, register } = useForm()
  const [calendarStyles, setCalendarStyles] = useState({})

  const onSubmit = data => {
    console.log('data submitted ', data)
    const newCalendarStyles = {
      height: Number(data.height)
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
      <BaseComponent {...calendarStyles} />
    </>
  )
}
