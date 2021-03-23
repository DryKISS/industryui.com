/**
 * Components - Organisms - Calendar - Full Calendar
 *
 * @see https://fullcalendar.io/docs
 * @see https://fullcalendar.io/docs/react
 */

// React
import React, { forwardRef, useState } from 'react'
import { bool, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import { LdsSpinner } from '../../../molecules/pageLoading/components/ldsSpinner'
import { PageLoading } from '../../../molecules/pageLoading/components/pageLoading'
import { CalendarWrapper } from './calendarWrapper'
import { CALENDAR } from './variables'
import { THEME_COLOUR } from '../../../theme/variables/colour'

export const Calendar = forwardRef(({ ...props }, ref) => {
  const [loading, setLoading] = useState(false)

  return (
    <Wrapper>
      {props.hasLoading && loading && <PageLoading indicator={<LdsSpinner />} />}

      <CalendarWrapper
        {...props}
        eventColor={props.defaultEventColor || THEME_COLOUR.primary}
        events={props.events}
        forwardedRef={ref}
        header={props.header || CALENDAR.header}
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

Calendar.propTypes = {
  defaultEventColor: string,
  showTooltip: bool
}

Calendar.defaultProps = {
  defaultEventColor: 'primary',
  showTooltip: false
}
