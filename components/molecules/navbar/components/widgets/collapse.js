/**
 * Navbar - Widgets
 */

// React
import { bool, node } from 'prop-types'

// UI
import { MEDIA_QUERY } from '../../../../'

// Style
import styled from 'styled-components'

export const NavCollapse = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  flex-basis: 100%;
  flex-grow: 1;
  ${MEDIA_QUERY.desktop`
    border: none;
    display: flex;
    flex-basis: auto;
  `}
`

NavCollapse.propTypes = {
  children: node.isRequired,
  visible: bool.isRequired
}
