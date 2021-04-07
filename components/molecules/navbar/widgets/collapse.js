/**
 * Navbar — Widgets — Collapse
 */

// React
import { bool } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import MEDIA_QUERY from '../../../utils/mediaQuery/query'

const NavCollapse = styled.div`
  flex-basis: 100%;
  flex-grow: 1;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  margin: ${({ theme }) => (theme.NAVBAR.positionCollapse === 'fixed' ? '2.5rem 2rem' : 'inherit')};
  position: ${({ theme }) => theme.NAVBAR.positionCollapse};
  right: ${({ theme }) => (theme.NAVBAR.positionCollapse === 'fixed' ? '0' : 'inherit')};
  margin: ${({ theme }) => (theme.NAVBAR.positionCollapse === 'fixed' ? '2.5rem 2rem' : 'inherit')};

  ${({ theme }) => MEDIA_QUERY[theme.NAVBAR.breakpoint]`
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

export default NavCollapse
