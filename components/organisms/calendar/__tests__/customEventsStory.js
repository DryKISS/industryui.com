/**
 * Components - Organisms - Full Calendar - Custom events
 */

// React
import React, { useState } from 'react'

// React Hook Form
import { useForm } from 'react-hook-form'

// UI

import OffCanvas from '../../../../molecules/offCanvas/offCanvas'
import Button from '../../../../atoms/button/button/button'
import Form from '../../../../form/form/form'
import Label from '../../../../form/label/label'
import Input from '../../../../form/input/input'
import Select from '../../../../form/select/select'
import Checkbox from '../../../../form/checkbox/checkbox'

import { BaseComponent } from './stories'

// Data
import { colorEvent, assetType, displayEventOptions, checkBoxOptions } from '../__mocks__/events'

const CustomEventsStory = () => {
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
        <Label label="Title">
          <Input name="title" errors={errors} placeholder="Event title" register={register} />
        </Label>

        <Label label="All day">
          <Checkbox data={checkBoxOptions} name="all day" {...defaultProps} />
        </Label>

        <Label label="Background Color">
          <Select name="backgroundColor" options={colorEvent} {...defaultProps} />
        </Label>

        <Label label="Text color">
          <Select name="textColor" options={colorEvent} {...defaultProps} />
        </Label>

        <Label label="Border Color">
          <Select name="borderColor" options={colorEvent} {...defaultProps} />
        </Label>

        <Label label="Url">
          <Input
            name="url"
            placeholder="https://myevent.com"
            register={register}
            {...defaultProps}
          />
        </Label>

        <Label label="Display Event Options">
          <Select name="displayEventOptions" options={displayEventOptions} {...defaultProps} />
        </Label>

        <Label label="overlap">
          <Checkbox data={checkBoxOptions} name="overlap" ref={register} {...defaultProps} />
        </Label>

        <Label label="draggable">
          <Checkbox data={checkBoxOptions} name="editable" ref={register} {...defaultProps} />
        </Label>

        <Label label="Asset Type">
          <Select name="assetType" options={assetType} {...defaultProps} />
        </Label>

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

      <BaseComponent events={events} eventClick={handleEventClick} dateClick={handleDateClick} />
    </>
  )
}
export default CustomEventsStory
