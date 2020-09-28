/**
 * Full Calendar
 */

// React
import { useState, useRef, useEffect } from 'react'

// Storybook
import { boolean, select } from '@storybook/addon-knobs'

// UI
import { Calendar, Theme } from 'components'
import Readme from '../README.md'

// Data
import { Events, AvailableViews } from '../__mocks__/events'

// Stories
import { CustomCalendarStyles } from './customCalendarStyles'
import { CustomEventsStory } from './customEventsStory'

export default {
  title: 'Organisms/Full Calendar',
  components: Calendar,
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

  const defaultCalendarProps = {
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

  return <Calendar ref={calendarRef} {...defaultCalendarProps} />
}

export const main = () => <BaseComponent />

export const events = () => <BaseComponent events={Events} />

export const CustomCalendar = () => {
  return <CustomCalendarStyles />
}

export const CustomEvents = () => {
  return <CustomEventsStory />
}

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
