/**
 * Full Calendar
 */

// React
import { useState, useRef, useEffect } from 'react'

// Storybook
import { boolean, select, withKnobs } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// UI
import { Calendar, Theme } from '../../../'
import Readme from '../README.md'
// Data
import {
  Events,
  AvailableViews,
  colorEvent,
  assetType,
  displayEventOptions,
  checkBoxOptions
} from '../__mocks__/events'

import { useForm } from 'react-hook-form'
import { OffCanvas, Button, SelectField, FormLabel, FormField, CheckboxField } from 'components'

import { FormForm } from 'index'

export default {
  title: 'Organisms/Full Calendar',
  components: Calendar,
  decorators: [Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const BaseComponent = (props = {}) => {
  const defaultView = select('defaultView', AvailableViews, 'dayGridMonth')

  const calendarRef = useRef(null)

  useEffect(() => {
    if (calendarRef.current) {
      calendarRef.current.componentWillUnmount()
      calendarRef.current.componentDidMount()
    }
  }, [defaultView])

  const defaultProps = {
    businessHoursSelect: select('businessHours', {
      false: false,
      MondayToFriday: true,
      MondayToThursday: {
        // days of week. an array of zero-based day of week integers (0=Sunday)
        daysOfWeek: [1, 2, 3, 4], // Monday - Thursday
        startTime: '10:00', // a start time (10am in this example)
        endTime: '18:00' // an end time (6pm in this example)
      }
    }),
    defaultEventColorSelect: select('defaultEventColor', Object.keys(Theme.COLOUR), 'primary'),
    nowIndicatorBoolean: boolean('nowIndicator', false),
    weekendsBoolean: boolean('weekends', true),
    defaultView,
    ...props
  }

  return <Calendar ref={calendarRef} {...defaultProps} />
}

export const main = () => <BaseComponent />

export const events = () => <BaseComponent events={Events} />

export const eventsWithEventAdditionOnClick = () => {
  const [events, setEvents] = useState(Events || [])
  const handleDateClick = arg => {
    if (window.confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      const event = {
        title: 'New Event',
        start: arg.date,
        allDay: arg.allDay
      }
      setEvents([...events, event])
    }
  }

  return <BaseComponent events={events} dateClick={handleDateClick} />
}

export const eventClick = () => {
  const handleEventClick = ({ event }) => {
    event.setProp('title', event.title + ' - ' + 'updated')
  }

  return <BaseComponent eventClick={handleEventClick} events={Events} />
}

export const eventsWithTooltip = () => {
  return <BaseComponent events={Events} showTooltip />
}

export const fetchEvents = () => {
  const fetchEvents = (info, success) => {
    setTimeout(() => {
      success(Events)
    }, 1000)
  }

  return <BaseComponent events={fetchEvents} />
}

export const fetchEventsWithTooltip = () => {
  const fetchEvents = (info, success) => {
    setTimeout(() => {
      success(Events)
    }, 1000)
  }

  return <BaseComponent events={fetchEvents} showTooltip />
}

export const fetchEventsWithLoadingIndicator = () => {
  const fetchEvents = (info, success) => {
    setTimeout(() => {
      success(Events)
    }, 1000)
  }

  return <BaseComponent events={fetchEvents} hasLoading />
}

export const customEvents = () => {
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
    console.log('event added ', data)

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
    console.log('Show the values saved ', args.event)
    // I guess to make it work with our OffCanvas when we click on the event we should
    // use a useState to save the event we are clicking, as default we should the default values
    // when we click, and when we edit we should the values from the event editable since we
    // get them from args.event
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
