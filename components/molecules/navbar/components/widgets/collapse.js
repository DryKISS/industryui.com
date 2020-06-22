/**
 * Navbar — Widgets — Collapse
 */

// React
import { bool } from 'prop-types'

// UI
import { MEDIA_QUERY } from '../../../../'

// Style
import styled from 'styled-components'

export const NavCollapse = styled.div`
  flex-basis: 100%;
  flex-grow: 1;
  display: ${props => (props.visible ? 'block' : 'none')};
  position: ${({ theme }) => theme.NAVBAR.positionCollapse};
  right: ${({ theme }) => (theme.NAVBAR.positionCollapse === 'fixed' ? '0' : 'inherit')};
  margin: ${({ theme }) => (theme.NAVBAR.positionCollapse === 'fixed' ? '2.5rem 2rem' : 'inherit')};
  ${MEDIA_QUERY.desktop`
    border: none;
    display: flex;
    flex-basis: auto;
    position: static;
    margin: inherit;
  `}
`

NavCollapse.propTypes = {
  visible: bool.isRequired
}
