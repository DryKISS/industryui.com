/**
 * Full Caklendar
 */

// React
import { useState, useRef, useEffect } from 'react'

// Storybook
import { boolean, select, withKnobs } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// UI
import { COLOUR, Calendar } from '../../../'
import Readme from '../README.md'

// Data
import { Events, AvailableViews } from '../__mocks__/events'

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

export const main = () => {
  const businessHoursSelect = select('businessHours', {
    false: false,
    MondayToFriday: true,
    MondayToThursday: {
      // days of week. an array of zero-based day of week integers (0=Sunday)
      daysOfWeek: [1, 2, 3, 4], // Monday - Thursday
      startTime: '10:00', // a start time (10am in this example)
      endTime: '18:00' // an end time (6pm in this example)
    }
  })

  const defaultEventColorSelect = select('defaultEventColor', COLOUR, 'primary')
  const nowIndicatorBoolean = boolean('nowIndicator', false)
  const weekendsBoolean = boolean('weekends', true)
  const defaultView = select('defaultView', AvailableViews, 'dayGridMonth')

  const calendarRef = useRef(null)

  useEffect(() => {
    if (calendarRef.current) {
      calendarRef.current.componentWillUnmount()
      calendarRef.current.componentDidMount()
    }
  }, [defaultView])

  return (
    <Calendar
      businessHours={businessHoursSelect}
      defaultEventColor={defaultEventColorSelect}
      nowIndicator={nowIndicatorBoolean}
      weekends={weekendsBoolean}
      defaultView={defaultView}
      ref={calendarRef}
    />
  )
}

export const events = () => {
  const businessHoursSelect = select('businessHours', {
    false: false,
    MondayToFriday: true,
    MondayToThursday: {
      // days of week. an array of zero-based day of week integers (0=Sunday)
      daysOfWeek: [1, 2, 3, 4], // Monday - Thursday
      startTime: '10:00', // a start time (10am in this example)
      endTime: '18:00' // an end time (6pm in this example)
    }
  })
  const defaultEventColorSelect = select('defaultEventColor', COLOUR, 'primary')
  const nowIndicatorBoolean = boolean('nowIndicator', false)
  const weekendsBoolean = boolean('weekends', true)
  const defaultView = select('defaultView', AvailableViews, 'dayGridMonth')

  const calendarRef = useRef(null)

  useEffect(() => {
    if (calendarRef.current) {
      calendarRef.current.componentWillUnmount()
      calendarRef.current.componentDidMount()
    }
  }, [defaultView])

  return (
    <Calendar
      events={Events}
      businessHours={businessHoursSelect}
      defaultEventColor={defaultEventColorSelect}
      nowIndicator={nowIndicatorBoolean}
      weekends={weekendsBoolean}
      defaultView={defaultView}
      ref={calendarRef}
    />
  )
}

export const eventsWithEventAdditionOnClick = () => {
  const businessHoursSelect = select('businessHours', {
    false: false,
    MondayToFriday: true,
    MondayToThursday: {
      // days of week. an array of zero-based day of week integers (0=Sunday)
      daysOfWeek: [1, 2, 3, 4], // Monday - Thursday
      startTime: '10:00', // a start time (10am in this example)
      endTime: '18:00' // an end time (6pm in this example)
    }
  })
  const defaultEventColorSelect = select('defaultEventColor', COLOUR, 'primary')
  const nowIndicatorBoolean = boolean('nowIndicator', false)
  const weekendsBoolean = boolean('weekends', true)
  const defaultView = select('defaultView', AvailableViews, 'dayGridMonth')

  const calendarRef = useRef(null)

  useEffect(() => {
    if (calendarRef.current) {
      calendarRef.current.componentWillUnmount()
      calendarRef.current.componentDidMount()
    }
  }, [defaultView])

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

  return (
    <Calendar
      events={events}
      dateClick={handleDateClick}
      businessHours={businessHoursSelect}
      defaultEventColor={defaultEventColorSelect}
      nowIndicator={nowIndicatorBoolean}
      weekends={weekendsBoolean}
      defaultView={defaultView}
      ref={calendarRef}
    />
  )
}

export const eventClick = () => {
  const businessHoursSelect = select('businessHours', {
    false: false,
    MondayToFriday: true,
    MondayToThursday: {
      // days of week. an array of zero-based day of week integers (0=Sunday)
      daysOfWeek: [1, 2, 3, 4], // Monday - Thursday
      startTime: '10:00', // a start time (10am in this example)
      endTime: '18:00' // an end time (6pm in this example)
    }
  })
  const defaultEventColorSelect = select('defaultEventColor', COLOUR, 'primary')
  const nowIndicatorBoolean = boolean('nowIndicator', false)
  const weekendsBoolean = boolean('weekends', true)
  const defaultView = select('defaultView', AvailableViews, 'dayGridMonth')

  const calendarRef = useRef(null)

  useEffect(() => {
    if (calendarRef.current) {
      calendarRef.current.componentWillUnmount()
      calendarRef.current.componentDidMount()
    }
  }, [defaultView])

  const handleEventClick = ({ event }) => {
    event.setProp('title', event.title + ' - ' + 'updated')
  }

  return (
    <Calendar
      eventClick={handleEventClick}
      events={Events}
      businessHours={businessHoursSelect}
      defaultEventColor={defaultEventColorSelect}
      nowIndicator={nowIndicatorBoolean}
      weekends={weekendsBoolean}
      defaultView={defaultView}
      ref={calendarRef}
    />
  )
}
