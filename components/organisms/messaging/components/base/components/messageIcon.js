/**
 * Messaging - Base - Icon
 */

// React
import React from 'react'
import { oneOf, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import Icon from '../../../../../atoms/icon/icon/icon'
import ICON_PREFIX from '../../../../../atoms/icon/constants/prefix'

const MessageIcon = ({ icon, prefix }) => {
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

  return <StyledIcon fixedWidth={false} icon={useIcon} prefix={prefix} />
}

const StyledIcon = styled(Icon)`
  color: ${({ theme: { MESSAGING } }) => MESSAGING.messageIconColour};
  margin-right: 0.5rem;
  vertical-align: middle !important;
`

MessageIcon.propTypes = {
  icon: string.isRequired,
  prefix: oneOf(Object.values(ICON_PREFIX))
}

MessageIcon.defaultProps = {
  prefix: 'fas'
}
export default MessageIcon
