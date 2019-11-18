/**
 * Full Calendar
 *
 * @see https://fullcalendar.io/docs
 * @see https://fullcalendar.io/docs/react
 * @see https://spectrum.chat/next-js/general/using-fullcalendar-with-next-js~6800b0f7-a423-4916-8a60-356c9b1b9ff4
 */

// React
import React, { forwardRef } from 'react'
import dynamic from 'next/dynamic'

// UI
import { Theme } from '../../../'

const CalendarWrapper = dynamic(() => import('./calendarWrapper'), {
  ssr: false
})

export const Calendar = forwardRef(({ ...props }, ref) => {
  const { CALENDAR, COLOUR } = Theme

  return (
    <CalendarWrapper
      {...props}
      eventColor={props.defaultEventColor || COLOUR.primary}
      header={CALENDAR.header}
      events={props.events}
      forwardedRef={ref}
    />
  )
})
