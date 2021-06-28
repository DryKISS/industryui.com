/**
 * Components - Molecules - Dropdown - Components - Dropdown
 */

// React
import React, { useEffect, useRef, useState } from 'react'
import { array, bool, func, node, oneOf, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import DropdownMenu from './menu'
import Icon from '../../atoms/icon/icon/icon'
import THEME_POSITION from '../../constants/position'

export const elementTypes = {
  Colour: 'colour',
  List: 'list',
  Icon: 'icon'
}

const Dropdown = ({
  caret,
  children,
  className,
  defaultOpen,
  elementType,
  items,
  onChange,
  position
}) => {
  const [open, setOpen] = useState(defaultOpen)
  const node = useRef()

  const handleClickAway = (e) => {
    if (node.current.contains(e.target)) {
      return
    }

    setOpen(false)
  }

  const handleClick = (e) => {
    e.stopPropagation()
    setOpen(!open)
  }

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickAway)
    } else {
      document.removeEventListener('mousedown', handleClickAway)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickAway)
    }
  }, [open])

  return (
    <StyledDropdown className={className} ref={node}>
      <StyledToggle
        className={`${open ? 'dropdown--active' : ''} dropdown--toggle`}
        onClick={handleClick}
      >
        {children}

        {caret && (
          <Icon
            aria-hidden="true"
            className="dropdown--caret"
            icon={position === THEME_POSITION.Top ? 'caret-up' : 'caret-down'}
          />
        )}

        {items && open && (
          <DropdownMenu
            closeDropdown={() => setOpen(false)}
            elementType={elementType ?? elementTypes.List}
            items={items}
            position={position}
            onItemClick={onChange}
          />
        )}
      </StyledToggle>
    </StyledDropdown>
  )
}

const StyledDropdown = styled.div`
  display: inline-block;
  position: relative;
`

const StyledToggle = styled.div`
  color: ${({ theme }) => theme.NAVBAR.colourActive};
  cursor: pointer;
  display: inline-block;
  line-height: 1.5;
  text-decoration: none;
`

Dropdown.propTypes = {
  caret: bool,
  children: node,
  className: string,
  defaultOpen: bool,
  elementType: oneOf([elementTypes.Colour, elementTypes.Icon, elementTypes.List]),
  items: array.isRequired,
  onChange: func,
  position: string
}

Dropdown.defaultProps = {
  caret: true,
  defaultOpen: false,
  position: 'left'
}

export default Dropdown
