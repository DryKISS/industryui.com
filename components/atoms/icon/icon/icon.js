/**
 * Icon
 */

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Style
import styled from 'styled-components'

// UI
import { DISPLAY, SPACER } from '../../../'
import { IconPropTypes, IconDefaultProps } from './props'

export const Icon = ({ icon, prefix, ...props }) => {
  return <StyledIcon icon={[prefix, icon]} {...props} />
}

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${({ color, context, theme }) => (context ? theme.COLOUR[context] : color)};

  ${theme => DISPLAY(theme)}
  ${theme => SPACER(theme)}
`

Icon.propTypes = IconPropTypes

Icon.defaultProps = IconDefaultProps
