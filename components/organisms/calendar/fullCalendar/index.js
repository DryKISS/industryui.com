/**
 * Components - Organisms - Calendar - Full Calendar
 *
 * @see https://fullcalendar.io/docs
 * @see https://fullcalendar.io/docs/react
 */

// React
import React, { forwardRef, useState } from 'react'

// UI
import { LdsSpinner, PageLoading, Theme } from '../../../'
import { CalendarWrapper } from './calendarWrapper'

// Styled Components
import styled from 'styled-components'

export const Calendar = forwardRef(({ ...props }, ref) => {
  const { CALENDAR, COLOUR } = Theme
  const [loading, setLoading] = useState(false)

  return (
    <Wrapper>
      {props.hasLoading && loading && (
        <PageLoading
          indicator={<LdsSpinner color="#000" size={50} />}
          opacity={0.7}
          position="absolute"
        />
      )}

      <CalendarWrapper
        {...props}
        eventColor={props.defaultEventColor || COLOUR.primary}
        header={props.header || CALENDAR.header}
        events={props.events}
        forwardedRef={ref}
        loading={setLoading}
      />
    </Wrapper>
  )
})

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  @media (max-width: 700px) {
    .fc-header-toolbar {
      flex-direction: column;
    }
  }
`
