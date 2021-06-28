/**
 * Components - Organisms - Full Calendar
 */

// React
import React, { useState } from 'react'

// Storybook
import Details from '../../../../../.storybook/decorators/details'

// UI
import Calendar from '../fullCalendar'
import Readme from '../README.md'

// Data
import { Events } from '../__mocks__/events'

export default {
  args: {
    businessHours: false,
    events: Events,
    hasLoading: true,
    height: 'auto',
    initialView: 'listWeek',
    nowIndicator: false
  },
  components: Calendar,
  decorators: [Details],
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Organisms/Full Calendar'
}

export const Main = (args) => {
  const [events, setEvents] = useState(Events || [])

  const handleDateClick = (arg) => {
    if (window.confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      const event = {
        title: 'New Event',
        start: arg.date,
        allDay: arg.allDay
      }

      setEvents([...events, event])
    }
  }

  const handleEventClick = ({ event }) => {
    event.setProp('title', event.title + ' - ' + 'updated')
  }

  return (
    <Calendar {...args} dateClick={handleDateClick} eventClick={handleEventClick} showTooltip />
  )
}
