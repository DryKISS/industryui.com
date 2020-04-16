/**
 * Icon
 */

// React
import { any, bool, number, object, array, objectOf, oneOf, oneOfType, string } from 'prop-types'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ICON_SIZE, ICON_PREFIX, ICON_PULL } from '../'

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
  border: bool,
  className: any,
  context: oneOf(Object.values(CONTEXT)),
  mask: oneOfType([object, array, string]),
  fixedWidth: bool,
  inverse: bool,
  icon: oneOfType([object, array, string.isRequired]),
  listItem: bool,
  prefix: oneOf(Object.values(ICON_PREFIX)),
  pull: oneOf(Object.values(ICON_PULL)),
  pulse: bool,
  size: oneOf(Object.values(ICON_SIZE)),
  spin: bool,
  style: objectOf(oneOfType([number, string])),
  title: string,
  transform: oneOfType([string, object]),
  swapOpacity: bool
}

Icon.defaultProps = {
  fixedWidth: true,
  prefix: 'far'
}
