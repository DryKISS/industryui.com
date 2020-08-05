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
import { useForm } from 'react-hook-form'
import { OffCanvas, Button, SelectField, FormLabel } from 'components'
// Data
import { Events, AvailableViews, colorEvent } from '../__mocks__/events'
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

const BaseComponent = (props = {}) => {
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

export const customEvents = () => {
  const [events, setEvents] = useState([])
  const [showOffCanvas, setShowOffCanvas] = useState(false)
  const { errors, handleSubmit, register } = useForm()
  const [calendarArg, setCalendarArg] = useState()

  const defaultProps = {
    // data: { name: 'fred' },
    // defaultValue: '',
    disabled: false,
    errors: errors,
    register: register,
    showError: false
  }
  const onSubmit = data => {
    console.log('event added ', data)

    const fullEvent = {
      id: 'ID',
      allDay: calendarArg.allDay,
      start: calendarArg.dateStr,
      // end: arg.dateStr,
      title: data.title,
      // URL visited when this event is clicked by the user. has relation with eventClick
      // We will have to check if we want to do it for external routes, a function can calculate this
      url: data.url,
      // classNames: ['calendarClass', 'calendarClass'],
      editable: true,
      // https://fullcalendar.io/docs/eventDisplay   just working in dayGrid
      display: 'auto',
      // this is when drag&Drop or sizing boolean/function if false
      eventOverlap: true,
      // Override this colors for the event
      backgroundColor: data.backgroundColor,
      borderColor: 'black',
      textColor: data.textColor,
      extendedProps: {
        assetType: 'TV'
      }
      // Properties are readOnly, to modify them https://fullcalendar.io/docs/Event-setProp
    }
    setEvents([...events, fullEvent])
    closeOffCanvas()
  }

  const CustomEventForm = () => {
    return (
      <FormForm handleSubmit={handleSubmit(onSubmit)}>
        <FormLabel label='Title'>
          <input name='title' ref={register} />
        </FormLabel>
        <FormLabel label='Background Color'>
          <SelectField name='backgroundColor' options={colorEvent} {...defaultProps} />
        </FormLabel>
        <FormLabel label='Text color'>
          <SelectField name='textColor' options={colorEvent} {...defaultProps} />
        </FormLabel>
        <FormLabel label='Url'>
          <input name='url' ref={register} />
        </FormLabel>
        <FormLabel label='eventOverlap'>
          <input type='checkbox' name='eventOverlap' ref={register} />
        </FormLabel>

        <Button content='Submit' type='submit' />
      </FormForm>
    )
  }

  const handleDateClick = arg => {
    console.log(arg)
    setCalendarArg(arg)
    setShowOffCanvas(true)
  }

  const closeOffCanvas = () => {
    setShowOffCanvas(!showOffCanvas)
  }
  // Also check where is the X effect
  return (
    <>
      {showOffCanvas && (
        <OffCanvas headerText='Add custom event' show={showOffCanvas}>
          {CustomEventForm()}
        </OffCanvas>
      )}
      <BaseComponent events={events} dateClick={handleDateClick} />
    </>
  )
}

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
