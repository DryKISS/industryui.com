/**
 * Components - Molecules - Components - MenuDropdown
 */

// React
import { array, bool, number } from 'prop-types'

// UI
import MenuItems from './MenuItems'

// Style
import styled, { css } from 'styled-components'

const MenuDropdown = ({ dropdown, depthLevel, submenus }) => {
  depthLevel = depthLevel + 1
  // TODO: Find a ways to handle it without adding classes
  const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : ''

  return (
    <DropdownWrapper
      className={`${dropdownClass} ${dropdown ? 'show' : ''}`}
      isDropdown={depthLevel > 1}
    >
      {submenus.map((submenu, index) => (
        <MenuItems depthLevel={depthLevel} items={submenu} key={index} />
      ))}
    </DropdownWrapper>
  )
}

const DropdownWrapper = styled.ul`
  position: absolute;
  top: 100px;
  left: 50px;
  font-size: 0.875rem;
  z-index: 9999;
  padding: 0.5rem 0;
  list-style: none;
  border-radius: 0.5rem;
  display: none;

  &.show {
    display: flex;
  }

  .dropdown-submenu {
    left: -8px;
  }
`

MenuDropdown.propTypes = {
  dropdown: bool.isRequired,
  depthLevel: number.isRequired,
  submenus: array.isRequired
}

export default MenuDropdown
