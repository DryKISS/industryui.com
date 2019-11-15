/**
 * Full Calendar
 *
 * @see https://fullcalendar.io/docs
 * @see https://fullcalendar.io/docs/react
 * @see https://spectrum.chat/next-js/general/using-fullcalendar-with-next-js~6800b0f7-a423-4916-8a60-356c9b1b9ff4
 */

// React
import React, { forwardRef, useState } from 'react'

// Next
import dynamic from 'next/dynamic'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { withTheme } from 'styled-components'
import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'

// UI
import { Theme } from '../../../'

export const Calendar = forwardRef(({ ...props }, ref) => {
  const { CALENDAR, COLOUR } = Theme

  return (
    <FullCalendar
      defaultView={props.defaultView}
      plugins={[
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin
      ]}
      eventColor={props.defaultEventColor || COLOUR.primary}
      header={CALENDAR.header}
      events={props.events}
      ref={ref}
      {...props}
    />
  )
})