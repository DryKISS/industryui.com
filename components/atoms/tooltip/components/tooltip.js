/**
 * Tooltip
 */

// Style
import styled from 'styled-components'

// Tippy
import Tippy from '@tippyjs/react'

// UI
import { BACKGROUND } from '../../../'
import { TooltipDefaultProps, TooltipPropTypes } from './props'

export const Tooltip = ({ children, content, context, ...props }) => {
  return (
    <StyledTippy content={content} {...props}>
      {children}
    </StyledTippy>
  )
}

const StyledTippy = styled(Tippy)`
  && {
    ${props => BACKGROUND(props)}

    .tippy-content {
      padding: 8px;
    }

    .tippy-arrow::before {
      color: ${({ context, theme }) => theme.COLOUR[context]};
    }
  }
`

Tooltip.propTypes = TooltipPropTypes
Tooltip.defaultProps = TooltipDefaultProps
