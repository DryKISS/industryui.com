/**
 * Components - Organisms - Calendar - Full Calendar - Event
 */

// React
import React from 'react'
import ReactDOM from 'react-dom'

// Style
import styled, { ThemeProvider } from 'styled-components'

// UI
import { BACKGROUND, Theme } from '../../../'
import Text from '../../../../atoms/text/text'
import Tooltip from '../../../../atoms/tooltip/tooltip'

const EventContent = ({
  defaultEventColor,
  event: {
    extendedProps: { context, description, tooltip },
    title
  },
  showTooltip
}) => {
  const content = (
    <StyledEvent context={context || defaultEventColor}>
      <Text content={title} context="light" />
    </StyledEvent>
  )

  return showTooltip ? <Tooltip content={tooltip || description}>{content}</Tooltip> : content
}

const renderEvent = ({ defaultEventColor, event, el, showTooltip, view }) => {
  const eventDiv = document.createElement('div')
  const classes = Array.from(el.classList)
  eventDiv.classList.add(...classes)

  ReactDOM.render(
    <ThemeProvider theme={Theme}>
      <EventContent defaultEventColor={defaultEventColor} event={event} showTooltip={showTooltip} />
    </ThemeProvider>,
    eventDiv
  )

  return eventDiv
}

const StyledEvent = styled.div`
  ${(props) => BACKGROUND(props)}
  padding: 0 4px;
  color: white;
  border-radius: 4px;
`

export default renderEvent
