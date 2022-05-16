/**
 * Components - Organisms - Calendar - Full Calendar - Wrapper
 */

// React
import React from 'react'

// Full Calendar
import Calendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import timeGridPlugin from '@fullcalendar/timegrid'

const CalendarWrapper = (props) => (
  <Calendar plugins={[dayGridPlugin, interactionPlugin, listPlugin, timeGridPlugin]} {...props} />
)

export default CalendarWrapper
