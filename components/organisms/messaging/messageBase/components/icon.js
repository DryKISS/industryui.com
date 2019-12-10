/**
 * Messaging/Message/Icon
 */

// React
import React from 'react'
import { string } from 'prop-types'

// UI
import { Icon } from '../../../../'

// Style
import styled from 'styled-components'

export const MessageIcon = ({ icon }) => {
  let useIcon = ''

  switch (icon) {
    case 'comment':
      useIcon = 'comment-dots'
      break
    case 'notification':
      useIcon = 'bell'
      break

    default:
      useIcon = 'envelope'
      break
  }

  return <StyledIcon fixedWidth={false} icon={useIcon} prefix='fad' />
}

const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.COLOUR.primary};
  margin-right: 0.5rem;
  vertical-align: middle !important;
`

MessageIcon.propTypes = {
  icon: string
}
