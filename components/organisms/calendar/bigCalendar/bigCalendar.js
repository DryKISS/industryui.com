/**
 * Big Calendar
 */

// Moment
import moment from 'moment'

// Big Calendar
import { Calendar, momentLocalizer } from 'react-big-calendar'

const events = [
  {
    start: moment(),
    end: moment()
      .add(1, 'days')
      .toDate(),
    title: 'Sprint planning'
  }
]

export const BigCalendar = () => {
  const localizer = momentLocalizer(moment)

  return (
    <div>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        events={events}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 500 }}
      />
    </div>
  )
}
