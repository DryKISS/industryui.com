/**
 * Icon
 */

// React
import { any, bool, number, objectOf, oneOf, oneOfType, string } from 'prop-types'

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Style
import styled from 'styled-components'

// UI
import { CONTEXT } from '../../../'

export const Icon = ({ icon, prefix, ...props }) => {
  return <StyledIcon icon={[prefix, icon]} {...props} />
}

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${({ color, context, theme }) => (context ? theme.COLOUR[context] : color)};
`

Icon.propTypes = {
  className: any,
  context: oneOf(Object.values(CONTEXT)),
  fixedWidth: bool,
  icon: string.isRequired,
  prefix: string,
  style: objectOf(oneOfType([number, string]))
}

Icon.defaultProps = {
  fixedWidth: true,
  prefix: 'far'
}
