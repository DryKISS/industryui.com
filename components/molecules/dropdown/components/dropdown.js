/**
 * Components - Molecules - Dropdown
 */

// React
import React, { useEffect, useRef, useState } from 'react'
import { array, bool, func, node, oneOf, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import { DropdownMenu, Icon } from '../../../'
import { THEME_POSITION } from '../../../theme/constants/position'

export const elementTypes = {
  Colour: 'colour',
  List: 'list',
  Icon: 'icon'
}

export const Dropdown = ({
  caret,
  className,
  children,
  elementType,
  items,
  onChange,
  defaultOpen,
  position
}) => {
  const [open, setOpen] = useState(defaultOpen)

  const node = useRef()

  const handleClickAway = (event) => {
    if (node.current.contains(event.target)) {
      return
    }
    setOpen(false)
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
        onClick={() => setOpen(!open)}>
        {children}

        {caret && (
          <Icon
            aria-hidden="true"
            className="dropdown--caret"
            icon={position === THEME_POSITION.Top ? 'caret-up' : 'caret-down'}
            prefix="fas"
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
  elementType: oneOf([
    elementTypes.Colour,
    elementTypes.Icon,
    elementTypes.List
  ]),
  items: array.isRequired,
  onChange: func,
  position: string
}

Dropdown.defaultProps = {
  caret: true,
  position: 'left'
}
