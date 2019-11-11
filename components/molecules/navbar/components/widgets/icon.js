/**
 * Navbar - Widgets
 */

// React
import { bool, string, func } from 'prop-types'

// UI
import { Icon, Link } from '../../../../'

export const NavIcon = ({ closeMenu, to, type, visible }) => {
  return (
    <Link to={to}>
      <a onClick={visible && closeMenu}>
        <Icon icon={type.icon} />
      </a>
    </Link>
  )
}

NavIcon.propTypes = {
  closeMenu: func,
  to: string,
  type: string,
  visible: bool
}
