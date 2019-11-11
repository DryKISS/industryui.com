/**
 * Alert
 */

// React
import { object, oneOfType, string } from 'prop-types'

// UI
import { Icon } from '../../../'

// Style
import styled from 'styled-components'

export const AlertContent = ({ content, context, icon, iconPrefix }) => (
  <StyledAlertContent>
    {icon && <Icon aria-hidden='true' context={context} icon={icon} prefix={iconPrefix} />}{' '}
    {content}
  </StyledAlertContent>
)

const StyledAlertContent = styled.div`
  padding: 0.75rem 1.25rem;
`

AlertContent.propTypes = {
  content: oneOfType([object, string]).isRequired,
  icon: string,
  iconPrefix: string
}
