/**
 * Dropdown
 */

// React
import React, { useEffect, useRef, useState } from 'react'
import { array, bool, node, string } from 'prop-types'

// UI
import { DropdownMenu, Icon } from '../../../'

// Style
import styled from 'styled-components'

export const Dropdown = ({ caret, className, children, items, position }) => {
  const [open, setOpen] = useState(false)
  const node = useRef()

  const handleClickAway = event => {
    if (node.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  useEffect(
    () => {
      if (open) {
        document.addEventListener('mousedown', handleClickAway)
      } else {
        document.removeEventListener('mousedown', handleClickAway)
      }

      return () => {
        document.removeEventListener('mousedown', handleClickAway)
      }
    },
    [open]
  )

  return (
    <StyledDropdown className={className} ref={node}>
      <StyledToggle
        className={`${open ? 'dropdown--active' : ''} dropdown--toggle`}
        onClick={() => setOpen(!open)}
      >
        {children}

        {caret && (
          <Icon className='dropdown--caret' aria-hidden='true' context='info' icon='chevron-down' />
        )}
      </StyledToggle>

      {open && (
        <DropdownMenu closeDropdown={() => setOpen(false)} items={items} position={position} />
      )}
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
  position: string
}

Dropdown.defaultProps = {
  caret: true,
  position: 'left'
}
