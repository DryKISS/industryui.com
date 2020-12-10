/**
 * Messaging - Base - Icon
 */

// React
import { oneOf, string } from 'prop-types'

// UI
import { Icon, ICON_PREFIX } from '../../../../../'

// Style
import styled from 'styled-components'

export const MessageIcon = ({ icon, prefix }) => {
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
