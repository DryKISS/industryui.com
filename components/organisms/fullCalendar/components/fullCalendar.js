/**
 * Full Calendar
 */

// React
import { forwardRef, useState } from 'react'
import { bool, string } from 'prop-types'
import dynamic from 'next/dynamic'

// UI
import { LdsSpinner, PageLoading, Theme } from '../../../'
import { renderEvent } from './event'

// Styled Components
import styled from 'styled-components'

const CalendarWrapper = dynamic(() => import('./calendarWrapper'), {
  ssr: false
})

export const Calendar = forwardRef(({ defaultEventColor, showTooltip, ...props }, ref) => {
  const { CALENDAR } = Theme
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
        header={props.header || CALENDAR.header}
        events={props.events}
        eventRender={info => renderEvent({ ...info, defaultEventColor, showTooltip })}
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

  .fc-event {
    background-color: transparent;
    border: none;
  }

  .fc-day-grid-event {
    padding: 0;
  }
`

Calendar.propTypes = {
  defaultEventColor: string,
  showTooltip: bool
}

Calendar.defaultProps = {
  defaultEventColor: 'primary',
  showTooltip: false
}