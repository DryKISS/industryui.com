/**
 * Icon
 */

// React
import React from 'react'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Style
import styled from 'styled-components'

// UI
import { SPACER } from '../../../'
import { IconPropTypes, IconDefaultProps } from './props'
import { themeDisplay } from '../../../theme/utils/display'

export const Icon = ({ icon, prefix, ...props }) => {
  return <StyledIcon icon={[prefix, icon]} {...props} />
}

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${({ color, context, theme }) => (context ? theme.COLOUR[context] : color)};
  ${theme => themeDisplay(theme)}
  ${theme => SPACER(theme)}
`

Icon.propTypes = IconPropTypes
Icon.defaultProps = IconDefaultProps
