/**
 * Big Calendar
 */

import React from 'react'

// import styled from 'styled-components'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

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

const events = [
  {
    start: moment(),
    end: moment()
      .add(1, 'days')
      .toDate(),
    title: 'sprint planning'
  }
]
/*
const StyledBigCalendar = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
` */
