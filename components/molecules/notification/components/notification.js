/**
 * Notification
 */

// React
import { useState } from 'react'
import { object } from 'prop-types'

// UI
import { Alert } from '../../'

// Style
import styled from 'styled-components'

export const Notification = ({ content, context }) => {
  return (
    <StyledNotificationWrapper>
      <Alert content={content} context={context} />
    </StyledNotificationWrapper>
  )
}

const StyledNotificationWrapper = styled.div`
  position: absolute;
  right: 2rem;
  top: 5rem;
  width: 25%;
`

Notification.propTypes = {
  content: object
}
