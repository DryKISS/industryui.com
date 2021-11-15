/**
 * Components - Organisms - Full Calendar - Events
 */

import { format, set, setDate } from 'date-fns'
export const Events = [
  {
    allDay: true,
    backgroundColor: 'purple',
    context: 'warning',
    date: format(setDate(new Date(), 5), 'yyyy-MM-dd'),
    description: 'All day event',
    title: 'Event 2',
    tooltip: 'All day event tooltip'
  },
  {
    context: 'secondary',
    backgroundColor: 'yellow',
    description: 'Event starting at a specific time',
    date: set(new Date(), { date: 7, hours: 14, minutes: 30 }).toISOString(),
    title: 'Event 12'
  },
  {
    context: 'danger',
    daysOfWeek: [2],
    description: 'Recurring event, once per week, all day',
    endRecur: format(setDate(new Date(), 30), 'yyyy-MM-dd'),
    startRecur: format(setDate(new Date(), 5), 'yyyy-MM-dd'),
    title: 'PPM: Boiler Check'
  },
  {
    context: 'danger',
    daysOfWeek: [2],
    description: 'Recurring event, once per week, all day',
    endRecur: format(setDate(new Date(), 30), 'yyyy-MM-dd'),
    startRecur: format(setDate(new Date(), 5), 'yyyy-MM-dd'),
    title: 'PPM: Boiler Check'
  },
  {
    context: 'danger',
    daysOfWeek: [2],
    description: 'Recurring event, once per week, all day',
    endRecur: format(setDate(new Date(), 30), 'yyyy-MM-dd'),
    startRecur: format(setDate(new Date(), 5), 'yyyy-MM-dd'),
    title: 'PPM: Boiler Check'
  },
  {
    daysOfWeek: [4],
    description: 'Once per week, all day',
    endRecur: format(setDate(new Date(), 18), 'yyyy-MM-dd'),
    endTime: '10:45',
    startRecur: format(setDate(new Date(), 3), 'yyyy-MM-dd'),
    startTime: '10:15',
    title: 'Recurring Event'
  },
  {
    className: 'text-right',
    description: 'Event with start and end date',
    title: 'Event 3',
    start: set(new Date(), { date: 18, hours: 12, minutes: 0 }).toISOString(),
    end: set(new Date(), { date: 18, hours: 13, minutes: 30 }).toISOString()
  },
  {
    description: 'Multi-day event',
    title: 'Event 4',
    start: setDate(new Date(), 23).toDateString(),
    end: setDate(new Date(), 24).toDateString()
  }
]

export const assetType = [
  {
    disabled: false,
    text: 'Tv',
    value: 'tv'
  },
  {
    disabled: false,
    text: 'Camera',
    value: 'camera'
  },
  {
    disabled: false,
    text: 'Chairs',
    value: 'chairs'
  }
]

export const colorEvent = [
  {
    disabled: false,
    text: 'White',
    value: 'white'
  },
  {
    disabled: false,
    text: 'Black',
    value: 'black'
  },
  {
    disabled: false,
    text: 'Orange',
    value: 'orange'
  },
  {
    disabled: false,
    text: 'red',
    value: 'red'
  },
  {
    disabled: false,
    text: 'Purple',
    value: 'purple'
  }
]

export const displayEventOptions = [
  {
    disabled: false,
    text: 'auto',
    value: 'auto'
  },
  {
    disabled: false,
    text: 'block',
    value: 'block'
  },
  {
    disabled: false,
    text: 'list-item',
    value: 'list-item'
  },
  {
    disabled: false,
    text: 'background',
    value: 'background'
  },
  {
    disabled: false,
    text: 'inverse-background',
    value: 'inverse-background'
  },
  {
    disabled: false,
    text: 'none',
    value: 'none'
  }
]

export const checkBoxOptions = [
  {
    id: 'checked',
    value: 'true'
  }
]
