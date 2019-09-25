/**
 * Full Calendar
 *
 * @see https://fullcalendar.io/docs
 * @see https://fullcalendar.io/docs/react
 * @see https://spectrum.chat/next-js/general/using-fullcalendar-with-next-js~6800b0f7-a423-4916-8a60-356c9b1b9ff4
 */

// React
import React, { createRef } from 'react'

// Next
import dynamic from 'next/dynamic'

// Full Calendar
// const FullCalendar = dynamic(() => import('@fullcalendar/react'), { ssr: false })
// const dayGridPlugin = dynamic(() => import('@fullcalendar/daygrid'), { ssr: false })
// const timeGridPlugin = dynamic(() => import('@fullcalendar/timegrid'), { ssr: false })
// const interactionPlugin = dynamic(() => import('@fullcalendar/interaction'), { ssr: false })

// const FullCalendarNoSSRWrapper = (props) => {
//   return (
//     <>
//       {console.log(props)}
//       {/* <FullCalendar {...props} /> */}
//     </>
//   )
// }

// const FullCalendarNoSSRWrapper = dynamic({
//   modules: () => ({
//     calendar: import('@fullcalendar/react'),
//     dayGridPlugin: import('@fullcalendar/daygrid'),
//     timeGridPlugin: import('@fullcalendar/timegrid'),
//     interactionPlugin: import('@fullcalendar/interaction')
//   }),
//   render: (props, { calendar: FullCalendar, ...plugins }) => (
//     <>
//       <Cal {...props} plugins={Object.values(plugins)} />
//     </>
//   ),
//   ssr: false,
//   loading: () => <>HERE</>
// })

// import '@fullcalendar/core/main.css'
// import '@fullcalendar/daygrid/main.css'
// import '@fullcalendar/timegrid/main.css'

export const Calendar = () => {
  //   const calendarComponentRef = createRef()

  //   const header = {
  //     left: 'prev,next today',
  //     center: 'title',
  //     right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  //   }

  //   const footer = {
  //     left: 'prev,next today',
  //     center: 'title',
  //     right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  //   }

  //   const events = [
  //     { title: 'event 1', date: '2019-09-02' },
  //     { title: 'event 2', date: '2019-09-21' }
  //   ]

  //   const handleDateClick = (arg) => {
  //     if (window.confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
  //       this.setState({ // add new event data
  //         calendarEvents: this.state.calendarEvents.concat({ // creates a new array
  //           title: 'New Event',
  //           start: arg.date,
  //           allDay: arg.allDay
  //         })
  //       })
  //     }
  //   }

  return (
    <>
      {/* //       <FullCalendarNoSSRWrapper
  //         businessHours
  //         dateClick={handleDateClick}
  //         defaultView='dayGridMonth'
  //         eventColor='#e3336e'
  //         events={events}
  //         footer={footer}
  //         header={header}
  //         nowIndicator
  //         ref={calendarComponentRef}
  //         weekends
  //       /> */}
    </>
  )
}
