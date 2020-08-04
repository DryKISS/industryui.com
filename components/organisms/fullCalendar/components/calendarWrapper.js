/**
 * Full Calendar - Wrapper
 */
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'

const CalendarWrapper = props => {
  return (
    <FullCalendar
      defaultView={props.defaultView}
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
      ref={props.forwardedRef}
      {...props}
    />
  )
}

export default CalendarWrapper
