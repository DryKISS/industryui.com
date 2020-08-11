/**
 * Full Calendar
 *
 * @see https://fullcalendar.io/docs
 * @see https://fullcalendar.io/docs/react
 * @see https://spectrum.chat/next-js/general/using-fullcalendar-with-next-js~6800b0f7-a423-4916-8a60-356c9b1b9ff4
 */

// React
import { forwardRef, useState } from 'react'

// UI
import { LdsSpinner, PageLoading, Theme } from '../../../'

// Styled Components
import styled from 'styled-components'

import { CalendarWrapper } from './calendarWrapper'

export const Calendar = forwardRef(({ ...props }, ref) => {
  const { CALENDAR, COLOUR } = Theme
  const [loading, setLoading] = useState(false)

  return (
    <Wrapper>
      {props.hasLoading && loading && (
        <PageLoading
          indicator={<LdsSpinner color='#000' size={50} />}
          opacity={0.7}
          position='absolute'
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
