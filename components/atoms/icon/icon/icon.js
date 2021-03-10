/**
 * Components - Atoms - Icon - Icon - Icon
 */

// React
import React from 'react'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Style
import styled from 'styled-components'

// UI
import { SPACER } from '../../../theme/utils/spacer'

import { themeDisplay } from '../../../theme/utils/display'
import { LazyIcon } from '../../../icons/index'

// Props
import { propTypes, defaultProps } from './props'

export const Icon = ({ icon, iui, prefix, ...props }) => {
  if (iui) {
    return <LazyIcon iconName={icon} {...props} />
  }

  return <StyledIcon icon={[prefix, icon]} {...props} />
}

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${({ color, context, theme }) => (context ? theme.COLOUR[context] : color)};
  ${(theme) => themeDisplay(theme)}
  ${(theme) => SPACER(theme)}
`

Icon.propTypes = propTypes
Icon.defaultProps = defaultProps
