import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'

const CalendarWrapper = (props) => {
  return (
    <FullCalendar defaultView='dayGridMonth' plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} {...props} />
  )
}

export default CalendarWrapper
