/**
 * Alert
 */

// React
import { oneOf, string } from 'prop-types'

// UI
import { CONTEXT, Icon, shadeLinearRgb } from '../../../'

// Style
import styled from 'styled-components'

export const AlertHeader = ({ context, header, icon, iconPrefix }) => (
  <StyledHeader context={context}>
    {icon && <Icon aria-hidden='true' context='help' icon={icon} prefix={iconPrefix} />} {header}
  </StyledHeader>
)

const StyledHeader = styled.div`
  background: ${({ context, theme }) => shadeLinearRgb(-0.4, theme.COLOUR[context])};
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  color: #fff;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 0.5rem 1.25rem;
`

AlertHeader.propTypes = {
  context: oneOf(Object.values(CONTEXT)),
  header: string.isRequired,
  icon: string,
  iconPrefix: string
}
