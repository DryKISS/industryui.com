/**
 * Tooltip
 */
import styled from 'styled-components'

import Tippy from '@tippyjs/react'

// UI
import { BACKGROUND } from '../../../'
import { TooltipPropTypes } from './props'

export const Tooltip = ({ children, content, context, ...props }) => {
  return (
    <StyledTippy content={content} context={context} {...props}>
      {children}
    </StyledTippy>
  )
}

const StyledTippy = styled(Tippy)`
  ${props => BACKGROUND(props)}
`

Tooltip.propTypes = TooltipPropTypes
