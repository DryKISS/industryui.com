/**
 * Components - Organisms - Calendar - Full Calendar - Wrapper
 */

// React
import React, { useEffect } from 'react'

// Next
import dynamic from 'next/dynamic'

let FullCalendar

const CalendarWrapper = (props) => {
  useEffect(() => {
    FullCalendar = dynamic({
      modules: () => ({
        calendar: import('@fullcalendar/react'),
        dayGridPlugin: import('@fullcalendar/daygrid'),
        interactionPlugin: import('@fullcalendar/interaction'),
        listPlugin: import('@fullcalendar/list'),
        timeGridPlugin: import('@fullcalendar/timegrid')
      }),
      render: (props, { calendar: Calendar, ...plugins }) => {
        return <Calendar plugins={Object.values(plugins)} {...props} />
      },
      ssr: false
    })

    props.setLoading(false)
  }, [props.loading])

  return !props.loading && <FullCalendar {...props} />
}
export default CalendarWrapper
