/**
 * Components - Organisms - Full Calendar
 */

// React
import React, { useRef, useEffect } from 'react'

// UI
import { Calendar } from '../../../../'
// import { Theme } from '../../../../'
import Readme from '../README.md'

// Data
// import { Events, AvailableViews } from '../__mocks__/events'

// Stories
// import { CustomCalendarStyles } from './customCalendarStyles'
// import { CustomEventsStory } from './customEventsStory'

export default {
  // args: {
  //   businessHoursSelect: 'true',
  //   defaultView: 'dayGridMonth',
  //   defaultEventColorSelect: 'primary',
  //   nowIndicatorBoolean: false,
  //   weekendsBoolean: true
  // },
  // argTypes: {
  //   defaultView: {
  //     control: {
  //       type: 'select',
  //       options: AvailableViews
  //     }
  //   },
  //   businessHoursSelect: {
  //     control: {
  //       type: 'select',
  //       options: ['true', 'MondayToFriday', 'MondayToThursday']
  //     }
  //   },
  //   defaultEventColorSelect: {
  //     control: {
  //       type: 'select',
  //       options: Object.keys(Theme.COLOUR)
  //     }
  //   }
  // },
  components: Calendar,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Organisms/Full Calendar'
}

export const Main = (args) => {
  const defaultView = args.defaultView

  const calendarRef = useRef(null)

  useEffect(() => {
    if (calendarRef.current) {
      calendarRef.current.componentWillUnmount()
      calendarRef.current.componentDidMount()
    }
  }, [defaultView])

  const defaultCalendarProps = {
    businessHoursSelect:
      args.businessHoursSelect === 'true'
        ? true
        : args.businessHoursSelect === 'MondayToThursday'
        ? {
            // days of week. an array of zero-based day of week integers (0=Sunday)
            // Monday - Thursday
            daysOfWeek: [1, 2, 3, 4],
            // a start time (10am in this example)
            startTime: '10:00',
            // an end time (6pm in this example)
            endTime: '18:00'
          }
        : false,
    defaultView,
    ...args
  }

  return <Calendar ref={calendarRef} {...defaultCalendarProps} />
}

export const ResourceTimeline = (args) => {
  const dateClick = (date) => {
    console.log('Date Click', date)
  }

  return (
    <Calendar
      // plugins={['interaction', 'resourceTimeline']}
      // aspectRatio={1.5}
      timeZone="UTC"
      height="300"
      dateClick={dateClick}
      // dayHeaders={false}
      // editable={true}
      scrollTime="milliseconds"
      headerToolbar={{
        center: 'title',
        left: 'today prevYear,prev,next,nextYear',
        right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth resourceTimelineYear'
      }}
      initialView="resourceTimelineYear"
      // events={'https://fullcalendar.io/demo-events.json?single-day&for-resource-timeline'}
      events={[
        {
          // allDay: false,
          resourceId: 'a',
          start: '2021-03-05T16:00:00+00:00',
          // start: '2021-03-19',
          // end: '2021-03-19',
          title: 'Event'
        }
      ]}
      nowIndicator={true}
      // resourceAreaColumns={[
      //   {
      //     field: 'title',
      //     headerContent: 'Asset'
      //   },
      //   {
      //     field: 'cost',
      //     headerContent: 'Cost'
      //   }
      // ]}
      // resourceAreaWidth="30%"
      // resourceGroupField="location"
      resources={[
        {
          // cost: '£150',
          id: 'a',
          // location: 'Strawberry Fields',
          title: 'Boiler Inspection'
        },
        {
          // cost: '£575',
          id: 'b',
          // location: 'Strawberry Fields',
          title: 'Kitchen Space'
        },
        {
          // cost: '£50',
          id: 'c',
          // location: 'Penny Lane',
          title: 'Desk'
        }
      ]}
      // slotDuration={{ days: 1 }}
      // snapDuration="24:00:00"
    />
  )
}

// export const main = (args) => <BaseComponent {...args} />

// export const events = (args) => <BaseComponent {...args} events={Events} />

// export const CustomCalendar = (args) => {
//   return <CustomCalendarStyles {...args} />
// }

// export const CustomEvents = (args) => {
//   return <CustomEventsStory {...args} />
// }

// export const EventsWithEventAdditionOnClick = () => {
//   const [events, setEvents] = useState(Events || [])
//   const handleDateClick = (arg) => {
//     if (window.confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
//       const event = {
//         title: 'New Event',
//         start: arg.date,
//         allDay: arg.allDay
//       }
//       setEvents([...events, event])
//     }
//   }

//   return <BaseComponent events={events} dateClick={handleDateClick} />
// }

// export const eventClick = (args) => {
//   const handleEventClick = ({ event }) => {
//     event.setProp('title', event.title + ' - ' + 'updated')
//   }

//   return <BaseComponent {...args} eventClick={handleEventClick} events={Events} />
// }

// export const eventsWithTooltip = (args) => {
//   return <BaseComponent {...args} events={Events} showTooltip />
// }

// export const fetchEvents = (args) => {
//   const fetchEvents = (info, success) => {
//     setTimeout(() => {
//       success(Events)
//     }, 1000)
//   }

//   return <BaseComponent {...args} events={fetchEvents} />
// }

// export const fetchEventsWithTooltip = (args) => {
//   const fetchEvents = (info, success) => {
//     setTimeout(() => {
//       success(Events)
//     }, 1000)
//   }

//   return <BaseComponent {...args} events={fetchEvents} showTooltip />
// }

// export const fetchEventsWithLoadingIndicator = (args) => {
//   const fetchEvents = (info, success) => {
//     setTimeout(() => {
//       success(Events)
//     }, 1000)
//   }

//   return <BaseComponent {...args} events={fetchEvents} hasLoading />
// }
