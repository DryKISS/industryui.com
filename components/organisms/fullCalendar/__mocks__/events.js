/**
 * Full Calendar - Events
 */

// Moment
import moment from 'moment'

export const Events = [
  {
    allDay: true,
    context: 'warning',
    date: moment()
      .date(2)
      .format('YYYY-MM-DD'),
    description: 'All day event',
    title: 'Event 1',
    tooltip: 'All day event tooltip'
  },
  {
    context: 'secondary',
    description: 'Event starting at a specific time',
    date: moment()
      .date(7)
      .hour(14)
      .minute(30)
      .format(),
    title: 'Event 2'
  },
  {
    context: 'danger',
    daysOfWeek: [2],
    description: 'Recurring event, once per week, all day',
    endRecur: moment()
      .date(30)
      .format('YYYY-MM-DD'),
    startRecur: moment()
      .date(5)
      .format('YYYY-MM-DD'),
    title: 'PPM: Boiler Check'
  },
  {
    daysOfWeek: [4],
    description: 'Once per week, all day',
    endRecur: moment()
      .date(18)
      .format('YYYY-MM-DD'),
    endTime: '10:45',
    startRecur: moment()
      .date(3)
      .format('YYYY-MM-DD'),
    startTime: '10:15',
    title: 'Recurring Event'
  },
  {
    className: 'text-right',
    description: 'Event with start and end date',
    title: 'Event 3',
    start: moment()
      .date(18)
      .hour(12)
      .minute(0)
      .format(),
    end: moment()
      .date(18)
      .hour(13)
      .minute(30)
      .format()
  },
  {
    description: 'Multi-day event',
    title: 'Event 4',
    start: moment()
      .date(23)
      .format(),
    end: moment()
      .date(24)
      .format()
  }
]

export const AvailableViews = [
  'dayGridMonth',
  'dayGridWeek',
  'dayGridDay',
  'dayGrid',
  'timeGridWeek',
  'timeGridDay',
  'timeGrid'
]
