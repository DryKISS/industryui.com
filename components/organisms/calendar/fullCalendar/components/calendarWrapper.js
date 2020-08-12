/**
 * Full Calendar - Wrapper
 */

// UI
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'

// This is to show how to import it but its not working for us
// import bootstrapPlugin from '@fullcalendar/bootstrap'
// import '@fullcalendar/bootstrap/main.css'

export const CalendarWrapper = props => {
  return (
    <FullCalendar
      defaultView={props.defaultView}
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
      ref={props.forwardedRef}
      {...props}
    />
  )
}
