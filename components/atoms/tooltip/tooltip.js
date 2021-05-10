/**
 * Components - Atoms - Tooltip
 */

// Style
import styled from 'styled-components'

// Tippy
import Tippy from '@tippyjs/react'

// UI
import themeBackground from '../../utils/background'
import { defaultProps, propTypes } from './components/props'

const Tooltip = styled(Tippy)`
  && {
    ${(props) => themeBackground(props)}

    .tippy-content {
      padding: 8px;
    }

    .tippy-arrow::before {
      color: ${({ context, theme }) => theme.COLOUR[context]};
    }
  }
`

Tooltip.propTypes = propTypes
Tooltip.defaultProps = defaultProps

export default Tooltip
