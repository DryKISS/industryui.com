/**
 * Full Calendar - Custom events
 */

// React
import { useState } from 'react'

// UI
import {
  OffCanvas,
  Button,
  SelectField,
  FormLabel,
  FormField,
  CheckboxField,
  useForm
} from 'components'

import { BaseComponent } from './stories'
import { FormForm } from 'index'

// Data
import { colorEvent, assetType, displayEventOptions, checkBoxOptions } from '../__mocks__/events'

export const CustomEventsStory = () => {
  const [events, setEvents] = useState([])
  const [showOffCanvas, setShowOffCanvas] = useState(false)
  const { errors, handleSubmit, register } = useForm()
  const [calendarArg, setCalendarArg] = useState()

  const defaultProps = {
    disabled: false,
    errors: errors,
    register: register,
    showError: true,
    required: false
  }

  // Pending add the tooltip
  const onSubmit = data => {
    const fullEvent = {
      id: 'ID',
      allDay: !!data.allDay,
      start: calendarArg.dateStr,
      end: calendarArg.dateStr,
      title: data.title,
      url: data.url,
      // classNames: ['calendarClass', 'calendarClass'],
      editable: !!data.editable,
      overlap: !!data.overlap,
      backgroundColor: data.backgroundColor,
      borderColor: data.borderColor,
      textColor: data.textColor,
      extendedProps: {
        assetType: data.assetType
      }
    }

    setEvents([...events, fullEvent])
    closeOffCanvas()
  }

  const CustomEventForm = () => {
    return (
      <FormForm handleSubmit={handleSubmit(onSubmit)}>
        <FormLabel label='Title'>
          <FormField
            name='title'
            required
            errors={errors}
            placeholder='Event title'
            register={register}
          />
        </FormLabel>
        <FormLabel label='All day'>
          <CheckboxField data={checkBoxOptions} name='all day' {...defaultProps} />
        </FormLabel>
        <FormLabel label='Background Color'>
          <SelectField name='backgroundColor' options={colorEvent} {...defaultProps} />
        </FormLabel>
        <FormLabel label='Text color'>
          <SelectField name='textColor' options={colorEvent} {...defaultProps} />
        </FormLabel>
        <FormLabel label='Border Color'>
          <SelectField name='borderColor' options={colorEvent} {...defaultProps} />
        </FormLabel>
        <FormLabel label='Url'>
          <FormField
            name='url'
            placeholder='https://myevent.com'
            register={register}
            {...defaultProps}
          />
        </FormLabel>
        <FormLabel label='Display Event Options'>
          <SelectField name='displayEventOptions' options={displayEventOptions} {...defaultProps} />
        </FormLabel>
        <FormLabel label='overlap'>
          <CheckboxField data={checkBoxOptions} name='overlap' ref={register} {...defaultProps} />
        </FormLabel>
        <FormLabel label='draggable'>
          <CheckboxField data={checkBoxOptions} name='editable' ref={register} {...defaultProps} />
        </FormLabel>
        <FormLabel label='Asset Type'>
          <SelectField name='assetType' options={assetType} {...defaultProps} />
        </FormLabel>
        <Button content='Submit' type='submit' />
      </FormForm>
    )
  }

  const handleDateClick = arg => {
    setCalendarArg(arg)
    setShowOffCanvas(true)
  }

  const closeOffCanvas = () => {
    setShowOffCanvas(!showOffCanvas)
  }

  const handleEventClick = args => {
    setShowOffCanvas(true)
  }

  return (
    <>
      {showOffCanvas && (
        <OffCanvas headerText='Add custom event' show={showOffCanvas}>
          {CustomEventForm()}
        </OffCanvas>
      )}
      <BaseComponent events={events} eventClick={handleEventClick} dateClick={handleDateClick} />
    </>
  )
}
