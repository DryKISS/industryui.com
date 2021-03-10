/**
 * Components - Organisms - Calendar - Full Calendar - Wrapper
 */

// React
import React, { useEffect, useState } from 'react'

// Next
import dynamic from 'next/dynamic'

let FullCalendar

export const CalendarWrapper = (props) => {
  const [calendarLoaded, setCalendarLoaded] = useState(false)

  useEffect(() => {
    FullCalendar = dynamic({
      modules: () => ({
        calendar: import('@fullcalendar/react'),
        dayGridPlugin: import('@fullcalendar/daygrid'),
        timeGridPlugin: import('@fullcalendar/timegrid'),
        interactionPlugin: import('@fullcalendar/interaction'),
        listPlugin: import('@fullcalendar/list')
      }),
      render: (props, { calendar: Calendar, ...plugins }) => (
        <Calendar plugins={Object.values(plugins)} ref={props.forwardedRef} {...props} />
      ),
      ssr: false
    })

    setCalendarLoaded(true)
  }, [])

  const showCalendar = (props) => {
    if (!calendarLoaded) return <div>Loading ...</div>

    return <FullCalendar {...props} />
  }

  return <div>{showCalendar(props)}</div>
}
