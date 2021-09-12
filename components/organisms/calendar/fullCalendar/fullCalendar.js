/**
 * Components - Organisms - Calendar - Full Calendar
 */

// React
import React from 'react'
import { array, bool, func, number, object, oneOfType, string } from 'prop-types'

// Next
import dynamic from 'next/dynamic'

// Style
import styled from 'styled-components'

// UI
import LdsSpinner from '../../../molecules/pageLoading/ldsSpinner'
import PageLoading from '../../../molecules/pageLoading/pageLoading'

const CalendarWrapper = dynamic(() => import('./components/calendarWrapper'), {
  ssr: false,
  loading: () => <PageLoading indicator={<LdsSpinner />} />
})

const Calendar = ({
  businessHours,
  buttonIcons,
  dateClick,
  dayMaxEvents,
  editable,
  expandRows,
  eventClick,
  eventContent,
  events,
  hasLoading,
  headerToolbar,
  height,
  initialDate,
  initialView,
  navLinks,
  nowIndicator,
  selectable,
  weekNumbers
}) => {
  return (
    <Wrapper>
      <CalendarWrapper
        businessHours={businessHours}
        buttonIcons={buttonIcons}
        dateClick={dateClick}
        dayMaxEvents={dayMaxEvents}
        editable={editable}
        expandRows={expandRows}
        eventClick={eventClick}
        eventContent={eventContent}
        events={events}
        height={height}
        headerToolbar={headerToolbar}
        initialDate={initialDate}
        initialView={initialView}
        navLinks={navLinks}
        nowIndicator={nowIndicator}
        selectable={selectable}
        weekNumbers={weekNumbers}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @media (max-width: 700px) {
    .fc-header-toolbar {
      flex-direction: column;
    }
  }
`

Calendar.propTypes = {
  businessHours: bool,
  buttonIcons: bool,
  dateClick: func,
  dayMaxEvents: bool,
  editable: bool,
  expandRows: bool,
  eventClick: func,
  eventContent: func,
  events: oneOfType([array, func]),
  hasLoading: bool,
  headerToolbar: object,
  height: oneOfType([number, string]),
  initialDate: string,
  initialView: string,
  navLinks: bool,
  nowIndicator: bool,
  selectable: bool,
  weekNumbers: bool
}

Calendar.defaultProps = {
  businessHours: false,
  buttonIcons: true,
  dayMaxEvents: true,
  editable: false,
  expandRows: false,
  hasLoading: true,
  headerToolbar: {
    center: 'title',
    end: 'listWeek,dayGridMonth,timeGridWeek,timeGridDay',
    start: 'prevYear,prev,next,nextYear today'
  },
  height: 'auto',
  initialView: 'listWeek',
  navLinks: true,
  nowIndicator: true,
  selectable: false,
  weekNumbers: false
}

export default Calendar
