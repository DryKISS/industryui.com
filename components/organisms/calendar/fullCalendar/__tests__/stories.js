/**
 * Full Calendar
 */

// React
import React, { useState, useRef, useEffect } from 'react'

// UI
import { Calendar, Theme } from '../../../../'
import Readme from '../README.md'

// Data
import { Events, AvailableViews } from '../__mocks__/events'

// Stories
import { CustomCalendarStyles } from './customCalendarStyles'
import { CustomEventsStory } from './customEventsStory'

export default {
  args: {
    businessHoursSelect: 'true',
    defaultView: 'dayGridMonth',
    defaultEventColorSelect: 'primary',
    nowIndicatorBoolean: false,
    weekendsBoolean: true,
  },
  argTypes: {
    defaultView: { control: { type: 'select', options: AvailableViews } },
    businessHoursSelect: {
      control: {
        type: 'select',
        options: ['true', 'MondayToFriday', 'MondayToThursday'],
      },
    },
    defaultEventColorSelect: {
      control: { type: 'select', options: Object.keys(Theme.COLOUR) },
    },
  },
  components: Calendar,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  title: 'Organisms/Full Calendar',
}

export const BaseComponent = (props = {}) => {
  const defaultView = props.defaultView

  const calendarRef = useRef(null)

  useEffect(() => {
    if (calendarRef.current) {
      calendarRef.current.componentWillUnmount()
      calendarRef.current.componentDidMount()
    }
  }, [defaultView])

  const defaultCalendarProps = {
    businessHoursSelect:
      props.businessHoursSelect === 'true'
        ? true
        : props.businessHoursSelect === 'MondayToThursday'
        ? {
            // days of week. an array of zero-based day of week integers (0=Sunday)
            daysOfWeek: [1, 2, 3, 4], // Monday - Thursday
            startTime: '10:00', // a start time (10am in this example)
            endTime: '18:00', // an end time (6pm in this example)
          }
        : false,

    defaultView,
    ...props,
  }

  return <Calendar ref={calendarRef} {...defaultCalendarProps} />
}

export const main = (args) => <BaseComponent {...args} />

export const events = (args) => <BaseComponent {...args} events={Events} />

export const CustomCalendar = (args) => {
  return <CustomCalendarStyles {...args} />
}

export const CustomEvents = (args) => {
  return <CustomEventsStory {...args} />
}

export const EventsWithEventAdditionOnClick = () => {
  const [events, setEvents] = useState(Events || [])
  const handleDateClick = (arg) => {
    if (window.confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      const event = {
        title: 'New Event',
        start: arg.date,
        allDay: arg.allDay,
      }
      setEvents([...events, event])
    }
  }

  return <BaseComponent events={events} dateClick={handleDateClick} />
}

export const eventClick = (args) => {
  const handleEventClick = ({ event }) => {
    event.setProp('title', event.title + ' - ' + 'updated')
  }

  return <BaseComponent {...args} eventClick={handleEventClick} events={Events} />
}

export const eventsWithTooltip = (args) => {
  return <BaseComponent {...args} events={Events} showTooltip />
}

export const fetchEvents = (args) => {
  const fetchEvents = (info, success) => {
    setTimeout(() => {
      success(Events)
    }, 1000)
  }

  return <BaseComponent {...args} events={fetchEvents} />
}

export const fetchEventsWithTooltip = (args) => {
  const fetchEvents = (info, success) => {
    setTimeout(() => {
      success(Events)
    }, 1000)
  }

  return <BaseComponent {...args} events={fetchEvents} showTooltip />
}

export const fetchEventsWithLoadingIndicator = (args) => {
  const fetchEvents = (info, success) => {
    setTimeout(() => {
      success(Events)
    }, 1000)
  }

  return <BaseComponent {...args} events={fetchEvents} hasLoading />
}
