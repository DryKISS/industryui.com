/**
 * Navbar - Widgets - Icon
 */

// React
import React from 'react'
import { bool, string, func } from 'prop-types'

// UI
import Icon from '../../../atoms/icon/icon/icon'
import Link from '../../../atoms/link/link'

const NavIcon = ({ closeMenu, to, type, visible }) => {
  return (
    <Link to={to} onClick={visible && closeMenu}>
      <Icon icon={type.icon} />
    </Link>
  )
}

NavIcon.propTypes = {
  closeMenu: func,
  to: string.isRequired,
  type: string.isRequired,
  visible: bool
}

NavIcon.defaultProps = {
  visible: false
}

export default NavIcon
