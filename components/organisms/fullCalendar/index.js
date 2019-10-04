/**
 * Full Calendar
 *
 * @see https://fullcalendar.io/docs
 * @see https://fullcalendar.io/docs/react
 * @see https://spectrum.chat/next-js/general/using-fullcalendar-with-next-js~6800b0f7-a423-4916-8a60-356c9b1b9ff4
 */

// React
import React, { createRef, useState } from 'react'

// Next
import dynamic from 'next/dynamic'

const CalendarWrapper = dynamic(
  () => import('./calendarWrapper'),
  {
    ssr: false
  }
)

export const Calendar = (props) => {
  const [events, setEvents] = useState(props.events || [])

  const calendarComponentRef = createRef()

  const header = {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  }

  const footer = {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  }

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

  return (
    <CalendarWrapper
      businessHours
      dateClick={handleDateClick}
      eventColor='#e3336e'
      footer={footer}
      header={header}
      nowIndicator
      ref={calendarComponentRef}
      weekends
      {...props}
      events={events}
    />
  )
}
