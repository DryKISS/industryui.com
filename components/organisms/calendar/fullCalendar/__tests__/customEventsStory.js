/**
 * Full Calendar - Custom events
 */

// React
import React, { useState } from 'react'

// React Hook Form
import { useForm } from 'react-hook-form'

// UI
import {
  OffCanvas,
  Button,
  SelectField,
  Form,
  FormLabel,
  FormField,
  CheckboxField
} from '../../../../'

import { BaseComponent } from './stories'

// Data
import {
  colorEvent,
  assetType,
  displayEventOptions,
  checkBoxOptions
} from '../__mocks__/events'

export const CustomEventsStory = () => {
  const [events, setEvents] = useState([])
  const [showOffCanvas, setShowOffCanvas] = useState(false)
  const { errors, handleSubmit, register } = useForm()
  const [calendarArg, setCalendarArg] = useState()

  const defaultProps = {
    disabled: false,
    errors: errors,
    register: register,
    showError: true
  }

  // Pending add the tooltip
  const onSubmit = (data) => {
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
      <Form handleSubmit={handleSubmit(onSubmit)}>
        <FormLabel label="Title">
          <FormField
            name="title"
            errors={errors}
            placeholder="Event title"
            register={register}
          />
        </FormLabel>

        <FormLabel label="All day">
          <CheckboxField
            data={checkBoxOptions}
            name="all day"
            {...defaultProps}
          />
        </FormLabel>

        <FormLabel label="Background Color">
          <SelectField
            name="backgroundColor"
            options={colorEvent}
            {...defaultProps}
          />
        </FormLabel>

        <FormLabel label="Text color">
          <SelectField
            name="textColor"
            options={colorEvent}
            {...defaultProps}
          />
        </FormLabel>

        <FormLabel label="Border Color">
          <SelectField
            name="borderColor"
            options={colorEvent}
            {...defaultProps}
          />
        </FormLabel>

        <FormLabel label="Url">
          <FormField
            name="url"
            placeholder="https://myevent.com"
            register={register}
            {...defaultProps}
          />
        </FormLabel>

        <FormLabel label="Display Event Options">
          <SelectField
            name="displayEventOptions"
            options={displayEventOptions}
            {...defaultProps}
          />
        </FormLabel>

        <FormLabel label="overlap">
          <CheckboxField
            data={checkBoxOptions}
            name="overlap"
            ref={register}
            {...defaultProps}
          />
        </FormLabel>

        <FormLabel label="draggable">
          <CheckboxField
            data={checkBoxOptions}
            name="editable"
            ref={register}
            {...defaultProps}
          />
        </FormLabel>

        <FormLabel label="Asset Type">
          <SelectField name="assetType" options={assetType} {...defaultProps} />
        </FormLabel>

        <Button content="Submit" type="submit" />
      </Form>
    )
  }

  const handleDateClick = (arg) => {
    setCalendarArg(arg)
    setShowOffCanvas(true)
  }

  const closeOffCanvas = () => {
    setShowOffCanvas(!showOffCanvas)
  }

  const handleEventClick = (args) => {
    setShowOffCanvas(true)
  }

  return (
    <>
      {showOffCanvas && (
        <OffCanvas headerText="Add custom event" show={showOffCanvas}>
          {CustomEventForm()}
        </OffCanvas>
      )}

      <BaseComponent
        events={events}
        eventClick={handleEventClick}
        dateClick={handleDateClick}
      />
    </>
  )
}
