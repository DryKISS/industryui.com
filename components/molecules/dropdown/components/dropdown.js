/**
 * Dropdown
 */

// React
import React, { useEffect, useRef, useState } from 'react'
import { array, bool, node, string, func, oneOf } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import { DropdownMenu, Icon } from '../../../'
import { Position } from 'components/theme'
export const elementTypes = {
  List: 'list',
  Colour: 'colour'
}
export const Dropdown = ({
  caret,
  className,
  children,
  items,
  onChange,
  position,
  elementType
}) => {
  position ??= 'bottom'
  const [open, setOpen] = useState(false)
  const node = useRef()
  const handleClickAway = event => {
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
        onClick={() => setOpen(!open)}
      >
        {children}

        {caret && (
          <Icon
            aria-hidden='true'
            className='dropdown--caret'
            icon={position === Position.Top ? 'carat-up' : 'caret-down'}
            prefix='fas'
          />
        )}
        {items && open && (
          <DropdownMenu
            elementType={elementType ?? elementTypes.List}
            closeDropdown={() => setOpen(false)}
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
  children: node.isRequired,
  className: string,
  items: array.isRequired,
  onChange: func,
  position: string,
  elementType: oneOf([elementTypes.List, elementTypes.Colour])
}

Dropdown.defaultProps = {
  caret: true,
  position: 'left'
}
